import "jsr:@supabase/functions-js/edge-runtime.d.ts";

// Supabase Webhook에서 보내주는 페이로드 타입 정의
interface WebhookPayload {
  type: 'INSERT' | 'UPDATE' | 'DELETE';
  table: string;
  record: {
    id: number;
    company_name: string;
    manager_name: string;
    phone: string;
    email: string;
    interested_services: string;
    message: string;
    created_at?: string;
  };
  schema: string;
}

Deno.serve(async (req) => {
  try {
    const payload: WebhookPayload = await req.json();
    const { record } = payload;

    // 디스코드 웹훅 URL (Supabase Secrets에 설정해야 함)
    const DISCORD_WEBHOOK_URL = Deno.env.get('DISCORD_WEBHOOK_URL');

    if (!DISCORD_WEBHOOK_URL) {
      throw new Error('DISCORD_WEBHOOK_URL is not set');
    }

    // 디스코드 Embed 메시지 구성
    const discordMessage = {
      embeds: [
        {
          title: "🚀 새로운 홈페이지 문의가 접수되었습니다!",
          color: 0x2B2D31, // 다크 그레이 톤
          fields: [
            {
              name: "🏢 회사명",
              value: record.company_name || "미입력",
              inline: true
            },
            {
              name: "👤 담당자명",
              value: record.manager_name || "미입력",
              inline: true
            },
            {
              name: "📞 연락처",
              value: record.phone || "미입력",
              inline: true
            },
            {
              name: "📧 이메일",
              value: record.email || "미입력",
              inline: true
            },
            {
              name: "🛠 관심 서비스",
              value: record.interested_services || "미입력",
              inline: false
            },
            {
              name: "📝 문의 내용",
              value: record.message || "내용 없음",
              inline: false
            }
          ],
          footer: {
            text: "Humease Webhook System"
          },
          timestamp: new Date().toISOString()
        }
      ]
    };

    // 디스코드로 발송
    const response = await fetch(DISCORD_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(discordMessage),
    });

    return new Response(JSON.stringify({ message: 'Success' }), {
      headers: { 'Content-Type': 'application/json' },
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { 'Content-Type': 'application/json' },
      status: 400,
    });
  }
});
