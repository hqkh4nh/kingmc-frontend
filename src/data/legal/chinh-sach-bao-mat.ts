import type { LegalDoc } from './types'

const doc: LegalDoc = {
  slug: 'chinh-sach-bao-mat',
  title: 'Chính sách bảo mật',
  summary:
    'Cách KingMC thu thập, sử dụng và bảo vệ dữ liệu cá nhân cùng dữ liệu giao dịch của người chơi, theo Nghị định 13/2023/NĐ-CP về bảo vệ dữ liệu cá nhân.',
  updatedAt: '2026-07-21',
  sections: [
    {
      id: 'gioi-thieu',
      heading: '1. Giới thiệu và phạm vi',
      blocks: [
        {
          type: 'p',
          text: 'Chính sách này mô tả cách KingMC thu thập, xử lý, lưu trữ và bảo vệ dữ liệu cá nhân của người chơi khi sử dụng máy chủ, website và các dịch vụ liên quan, bao gồm dữ liệu phát sinh từ hoạt động ủng hộ (nạp).',
        },
        {
          type: 'p',
          text: 'Chúng tôi xử lý dữ liệu cá nhân trên tinh thần tuân thủ Nghị định 13/2023/NĐ-CP về bảo vệ dữ liệu cá nhân và các quy định pháp luật Việt Nam có liên quan.',
        },
      ],
    },
    {
      id: 'du-lieu-thu-thap',
      heading: '2. Dữ liệu chúng tôi thu thập',
      blocks: [
        { type: 'subheading', text: 'Dữ liệu định danh trong game' },
        {
          type: 'list',
          items: [
            'Tên tài khoản Minecraft và mã định danh (UUID).',
            'Tên người dùng / ID Discord khi bạn liên kết tài khoản hoặc tham gia cộng đồng.',
            'Địa chỉ IP và nhật ký kết nối, phục vụ bảo mật và chống gian lận.',
            'Nhật ký hoạt động trong game (thời gian chơi, hành vi vi phạm nếu có).',
          ],
        },
        { type: 'subheading', text: 'Dữ liệu giao dịch (khi ủng hộ)' },
        {
          type: 'list',
          items: [
            'Mã giao dịch, số tiền, thời gian và phương thức thanh toán.',
            'Tên gói ủng hộ và quyền lợi trong game tương ứng.',
            'Thông tin liên hệ bạn cung cấp để xác nhận giao dịch (nếu có).',
          ],
        },
        {
          type: 'p',
          text: 'Chúng tôi không lưu trữ số thẻ ngân hàng đầy đủ, mã CVV hay mật khẩu thanh toán. Các thông tin này do cổng thanh toán trung gian xử lý theo tiêu chuẩn bảo mật của họ.',
        },
      ],
    },
    {
      id: 'muc-dich',
      heading: '3. Mục đích xử lý dữ liệu',
      blocks: [
        {
          type: 'list',
          items: [
            'Cung cấp, vận hành và duy trì dịch vụ trò chơi.',
            'Xác nhận giao dịch ủng hộ và kích hoạt quyền lợi trong game.',
            'Bảo đảm an ninh, phát hiện và ngăn chặn gian lận, lạm dụng.',
            'Hỗ trợ người chơi và xử lý khiếu nại.',
            'Cải thiện chất lượng dịch vụ và thực hiện nghĩa vụ pháp lý khi được yêu cầu.',
          ],
        },
      ],
    },
    {
      id: 'co-so-phap-ly',
      heading: '4. Cơ sở pháp lý xử lý dữ liệu',
      blocks: [
        {
          type: 'p',
          text: 'Chúng tôi xử lý dữ liệu cá nhân dựa trên một hoặc nhiều cơ sở sau: sự đồng ý của bạn; sự cần thiết để thực hiện dịch vụ mà bạn yêu cầu (bao gồm xử lý giao dịch ủng hộ); và việc tuân thủ nghĩa vụ pháp lý của chúng tôi theo quy định của pháp luật Việt Nam.',
        },
      ],
    },
    {
      id: 'chia-se',
      heading: '5. Chia sẻ dữ liệu với bên thứ ba',
      blocks: [
        {
          type: 'p',
          text: 'Chúng tôi không bán dữ liệu cá nhân của bạn. Dữ liệu chỉ được chia sẻ trong phạm vi cần thiết với:',
        },
        {
          type: 'list',
          items: [
            'Cổng thanh toán và đối tác trung gian để xử lý giao dịch ủng hộ.',
            'Nhà cung cấp hạ tầng, máy chủ và dịch vụ kỹ thuật phục vụ vận hành.',
            'Cơ quan nhà nước có thẩm quyền khi có yêu cầu hợp pháp.',
          ],
        },
      ],
    },
    {
      id: 'luu-tru',
      heading: '6. Lưu trữ và thời gian lưu giữ',
      blocks: [
        {
          type: 'p',
          text: 'Dữ liệu được lưu trong thời gian cần thiết cho mục đích đã nêu hoặc theo thời hạn pháp luật yêu cầu. Khi không còn cần thiết, dữ liệu sẽ được xóa hoặc ẩn danh. Nhật ký giao dịch có thể được lưu lâu hơn để phục vụ đối soát và giải quyết khiếu nại.',
        },
      ],
    },
    {
      id: 'bao-mat',
      heading: '7. Biện pháp bảo mật',
      blocks: [
        {
          type: 'p',
          text: 'Chúng tôi áp dụng các biện pháp kỹ thuật và quản lý hợp lý để bảo vệ dữ liệu, như phân quyền truy cập, mã hóa kênh truyền và giám sát an ninh. Tuy nhiên, không có hệ thống nào an toàn tuyệt đối; chúng tôi khuyến nghị bạn cũng chủ động bảo vệ thông tin tài khoản của mình.',
        },
      ],
    },
    {
      id: 'quyen-cua-ban',
      heading: '8. Quyền của bạn đối với dữ liệu cá nhân',
      blocks: [
        {
          type: 'p',
          text: 'Theo Nghị định 13/2023/NĐ-CP, bạn có các quyền sau đối với dữ liệu cá nhân của mình:',
        },
        {
          type: 'list',
          items: [
            'Quyền được biết về việc xử lý dữ liệu cá nhân của mình.',
            'Quyền đồng ý hoặc rút lại sự đồng ý.',
            'Quyền truy cập, chỉnh sửa dữ liệu.',
            'Quyền yêu cầu xóa hoặc hạn chế xử lý dữ liệu.',
            'Quyền phản đối việc xử lý dữ liệu trong một số trường hợp.',
            'Quyền khiếu nại, tố cáo, khởi kiện theo quy định pháp luật.',
          ],
        },
        {
          type: 'p',
          text: 'Để thực hiện các quyền này, vui lòng liên hệ chúng tôi qua kênh nêu ở mục cuối. Việc rút đồng ý có thể ảnh hưởng đến khả năng cung cấp một số dịch vụ cho bạn.',
        },
      ],
    },
    {
      id: 'du-lieu-tre-em',
      heading: '9. Dữ liệu của trẻ em',
      blocks: [
        {
          type: 'p',
          text: 'Đối với người chơi là trẻ em (dưới 16 tuổi theo quy định), việc xử lý dữ liệu cá nhân cần có sự đồng ý của cha mẹ hoặc người giám hộ. Nếu phát hiện đã thu thập dữ liệu của trẻ em mà không có sự đồng ý hợp lệ, chúng tôi sẽ tiến hành xóa theo quy định.',
        },
      ],
    },
    {
      id: 'cookie',
      heading: '10. Cookie và công nghệ tương tự',
      blocks: [
        {
          type: 'p',
          text: 'Website của KingMC có thể sử dụng cookie và công nghệ tương tự để ghi nhớ tùy chọn, phân tích lượng truy cập và cải thiện trải nghiệm. Bạn có thể quản lý cookie qua thiết lập trình duyệt; việc tắt cookie có thể ảnh hưởng đến một số chức năng.',
        },
      ],
    },
    {
      id: 'thay-doi',
      heading: '11. Thay đổi chính sách',
      blocks: [
        {
          type: 'p',
          text: 'Chính sách này có thể được cập nhật theo thời gian. Bản mới nhất luôn được đăng tải trên website kèm ngày cập nhật. Chúng tôi khuyến khích bạn xem lại định kỳ.',
        },
      ],
    },
    {
      id: 'lien-he',
      heading: '12. Liên hệ',
      blocks: [
        {
          type: 'p',
          text: 'Mọi yêu cầu liên quan đến dữ liệu cá nhân hoặc câu hỏi về chính sách này, vui lòng liên hệ Ban Quản Trị KingMC qua kênh Discord chính thức.',
        },
      ],
    },
  ],
}

export default doc
