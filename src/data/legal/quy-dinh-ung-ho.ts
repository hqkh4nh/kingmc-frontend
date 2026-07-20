import type { LegalDoc } from './types'

const doc: LegalDoc = {
  slug: 'quy-dinh-ung-ho',
  title: 'Quy định ủng hộ',
  summary:
    'Nguyên tắc và quy trình khi bạn ủng hộ máy chủ KingMC, cùng chính sách về quyền lợi trong game, hoàn tiền và xử lý sai sót giao dịch.',
  updatedAt: '2026-07-21',
  sections: [
    {
      id: 'ban-chat',
      heading: '1. Bản chất của việc ủng hộ',
      blocks: [
        {
          type: 'p',
          text: 'Ủng hộ là hành động tự nguyện của người chơi nhằm hỗ trợ chi phí duy trì, vận hành và phát triển máy chủ (thuê máy chủ, băng thông, plugin, nhân sự). Về bản chất, đây là khoản đóng góp tự nguyện, không phải giao dịch mua bán hàng hóa.',
        },
        {
          type: 'p',
          text: 'Bạn nên cân nhắc ủng hộ trong khả năng tài chính của mình và không xem đây là hình thức đầu tư hay mua tài sản có giá trị quy đổi.',
        },
      ],
    },
    {
      id: 'quyen-loi',
      heading: '2. Quyền lợi trong game',
      blocks: [
        {
          type: 'p',
          text: 'Để ghi nhận sự ủng hộ, người chơi có thể nhận một số quyền lợi trong game. Các quyền lợi này:',
        },
        {
          type: 'list',
          items: [
            'Chỉ tồn tại và có giá trị trong phạm vi máy chủ KingMC.',
            'Mang tính ghi nhận, không phải hàng hóa và không quy đổi thành tiền mặt hay tài sản ngoài game.',
            'Không được đảm bảo tồn tại vĩnh viễn nếu tính năng thay đổi, máy chủ điều chỉnh mô hình vận hành hoặc ngừng hoạt động vì lý do bất khả kháng.',
            'Không được mua bán, chuyển nhượng hay trao đổi bằng tiền thật ra bên ngoài hệ thống.',
          ],
        },
      ],
    },
    {
      id: 'quy-trinh',
      heading: '3. Phương thức và quy trình nạp',
      blocks: [
        {
          type: 'p',
          text: 'Bạn thực hiện ủng hộ qua các phương thức được công bố chính thức trên website hoặc Discord của KingMC. Vui lòng làm theo hướng dẫn và điền đúng thông tin (tên tài khoản, nội dung chuyển khoản) để hệ thống ghi nhận chính xác.',
        },
        {
          type: 'p',
          text: 'Chỉ thực hiện giao dịch qua kênh chính thức. KingMC không chịu trách nhiệm với các giao dịch thực hiện qua bên thứ ba, cá nhân giả mạo hoặc kênh không chính thức.',
        },
      ],
    },
    {
      id: 'kich-hoat',
      heading: '4. Thời gian kích hoạt quyền lợi',
      blocks: [
        {
          type: 'p',
          text: 'Quyền lợi thường được kích hoạt tự động sau khi hệ thống xác nhận giao dịch thành công. Trong một số trường hợp (đối soát thủ công, lỗi cổng thanh toán, giờ cao điểm), việc kích hoạt có thể chậm hơn. Nếu sau thời gian hợp lý mà chưa nhận được quyền lợi, vui lòng liên hệ hỗ trợ kèm bằng chứng giao dịch.',
        },
      ],
    },
    {
      id: 'hoan-tien',
      heading: '5. Chính sách hoàn tiền',
      blocks: [
        {
          type: 'p',
          text: 'Do bản chất tự nguyện và quyền lợi được cấp ngay trong game, các khoản ủng hộ về nguyên tắc không được hoàn lại sau khi đã kích hoạt thành công.',
        },
        {
          type: 'p',
          text: 'Trường hợp ngoại lệ được xem xét hoàn hoặc bù đắp gồm: lỗi kỹ thuật từ phía máy chủ khiến bạn bị trừ tiền nhưng không nhận được quyền lợi, hoặc giao dịch bị tính trùng. Việc xử lý dựa trên đối soát và cần bằng chứng hợp lệ.',
        },
      ],
    },
    {
      id: 'sai-sot',
      heading: '6. Xử lý sai sót giao dịch',
      blocks: [
        {
          type: 'p',
          text: 'Nếu bạn nạp nhầm nội dung, nhầm tài khoản hoặc chưa nhận được quyền lợi, vui lòng liên hệ Ban Quản Trị trong thời gian sớm nhất (khuyến nghị trong vòng 7 ngày kể từ giao dịch) và cung cấp mã giao dịch, thời gian, số tiền cùng ảnh chụp xác nhận. Chúng tôi sẽ hỗ trợ đối soát và xử lý phù hợp.',
        },
      ],
    },
    {
      id: 'cam-mua-ban',
      heading: '7. Cấm mua bán, trao đổi ngoài hệ thống',
      blocks: [
        {
          type: 'p',
          text: 'Nghiêm cấm mọi hành vi mua bán, trao đổi tài khoản, vật phẩm hoặc quyền lợi trong game bằng tiền thật ngoài hệ thống chính thức. Các giao dịch dạng này không được KingMC công nhận hay bảo vệ, và người vi phạm có thể bị thu hồi quyền lợi cùng khóa tài khoản.',
        },
      ],
    },
    {
      id: 'chong-gian-lan',
      heading: '8. Chống gian lận và lạm dụng',
      blocks: [
        {
          type: 'p',
          text: 'Các hành vi gian lận như khiếu nại hoàn tiền sai sự thật (chargeback) sau khi đã nhận quyền lợi, dùng nguồn tiền bất hợp pháp, hoặc lợi dụng lỗi để trục lợi sẽ dẫn đến thu hồi toàn bộ quyền lợi và khóa tài khoản, đồng thời có thể bị xử lý theo quy định pháp luật.',
        },
      ],
    },
    {
      id: 'do-tuoi',
      heading: '9. Độ tuổi và sự đồng ý của phụ huynh',
      blocks: [
        {
          type: 'p',
          text: 'Người chơi dưới 18 tuổi cần có sự đồng ý của cha mẹ hoặc người giám hộ trước khi ủng hộ. KingMC khuyến nghị phụ huynh giám sát hoạt động chi tiêu của con em và ủng hộ trong khả năng phù hợp.',
        },
      ],
    },
    {
      id: 'thay-doi',
      heading: '10. Thay đổi quy định và gói ủng hộ',
      blocks: [
        {
          type: 'p',
          text: 'KingMC có thể điều chỉnh danh mục gói ủng hộ, quyền lợi và quy định này để phù hợp với vận hành. Thay đổi được công bố trên kênh chính thức và áp dụng cho các giao dịch phát sinh sau thời điểm công bố.',
        },
      ],
    },
    {
      id: 'lien-he',
      heading: '11. Liên hệ hỗ trợ',
      blocks: [
        {
          type: 'p',
          text: 'Mọi vấn đề liên quan đến ủng hộ và giao dịch, vui lòng liên hệ Ban Quản Trị KingMC qua kênh Discord chính thức để được hỗ trợ nhanh nhất.',
        },
      ],
    },
  ],
}

export default doc
