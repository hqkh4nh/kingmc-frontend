import type { LegalDoc } from './types'

const doc: LegalDoc = {
  slug: 'thoa-thuan-nguoi-dung',
  title: 'Thỏa thuận người dùng',
  summary:
    'Các điều khoản áp dụng khi bạn tham gia và sử dụng máy chủ Minecraft KingMC. Vui lòng đọc kỹ trước khi chơi.',
  updatedAt: '2026-07-21',
  sections: [
    {
      id: 'gioi-thieu',
      heading: '1. Giới thiệu và chấp thuận',
      blocks: [
        {
          type: 'p',
          text: 'Thỏa thuận này điều chỉnh quan hệ giữa KingMC (sau đây gọi là "chúng tôi", "máy chủ") và người chơi khi truy cập, kết nối và sử dụng các dịch vụ trò chơi do KingMC vận hành, bao gồm máy chủ Minecraft, website, kênh Discord và các nền tảng liên quan.',
        },
        {
          type: 'p',
          text: 'Khi kết nối vào máy chủ hoặc sử dụng dịch vụ, bạn xác nhận đã đọc, hiểu và đồng ý bị ràng buộc bởi thỏa thuận này cùng các quy định đi kèm. Nếu không đồng ý, vui lòng ngừng sử dụng dịch vụ.',
        },
      ],
    },
    {
      id: 'dinh-nghia',
      heading: '2. Định nghĩa',
      blocks: [
        {
          type: 'list',
          items: [
            '"KingMC" / "Máy chủ": hệ thống máy chủ trò chơi Minecraft và các dịch vụ đi kèm do đội ngũ KingMC vận hành.',
            '"Người chơi" / "Bạn": cá nhân truy cập hoặc sử dụng dịch vụ của KingMC.',
            '"Tài khoản": tài khoản Minecraft (Java hoặc Bedrock) mà bạn dùng để kết nối, cùng thông tin định danh liên quan trên máy chủ và Discord.',
            '"Ban Quản Trị" (BQT): đội ngũ điều hành, quản lý và hỗ trợ vận hành máy chủ.',
            '"Ủng hộ": khoản đóng góp tự nguyện của người chơi nhằm duy trì và phát triển máy chủ.',
            '"Quyền lợi trong game": các vật phẩm, danh hiệu, tính năng hoặc ưu đãi mang tính ghi nhận, chỉ tồn tại và có giá trị trong phạm vi máy chủ.',
          ],
        },
      ],
    },
    {
      id: 'dieu-kien-su-dung',
      heading: '3. Điều kiện sử dụng dịch vụ',
      blocks: [
        {
          type: 'list',
          items: [
            'Bạn cần sở hữu một tài khoản Minecraft hợp lệ và tuân thủ Thỏa thuận cấp phép người dùng cuối (EULA) của Minecraft do Mojang Studios / Microsoft ban hành.',
            'Người dưới 18 tuổi cần có sự đồng ý và giám sát của cha mẹ hoặc người giám hộ khi sử dụng dịch vụ, đặc biệt với các hoạt động ủng hộ.',
            'Bạn cam kết cung cấp thông tin trung thực khi được yêu cầu và không mạo danh người khác.',
            'Việc sử dụng dịch vụ phải tuân thủ pháp luật Việt Nam, bao gồm Luật An ninh mạng 2018 và các quy định liên quan.',
          ],
        },
      ],
    },
    {
      id: 'tai-khoan',
      heading: '4. Tài khoản và bảo mật',
      blocks: [
        {
          type: 'p',
          text: 'Bạn chịu trách nhiệm bảo mật thông tin đăng nhập của mình. Mọi hoạt động diễn ra dưới tài khoản của bạn được xem là do bạn thực hiện.',
        },
        {
          type: 'list',
          items: [
            'Không chia sẻ, cho mượn hoặc mua bán tài khoản dùng để truy cập máy chủ.',
            'Thông báo ngay cho BQT khi phát hiện tài khoản bị truy cập trái phép.',
            'KingMC không chịu trách nhiệm cho thiệt hại phát sinh do bạn để lộ thông tin đăng nhập hoặc do bên thứ ba chiếm đoạt tài khoản ngoài tầm kiểm soát của máy chủ.',
          ],
        },
      ],
    },
    {
      id: 'quy-tac-ung-xu',
      heading: '5. Quy tắc ứng xử trong game',
      blocks: [
        {
          type: 'p',
          text: 'Nhằm giữ môi trường chơi công bằng và văn minh, người chơi không được thực hiện các hành vi sau:',
        },
        {
          type: 'list',
          items: [
            'Sử dụng phần mềm gian lận (hack, cheat, mod trái phép), lỗi (bug/dupe) hoặc bất kỳ công cụ nào tạo lợi thế không công bằng.',
            'Quấy rối, xúc phạm, đe dọa, phân biệt đối xử hoặc phát ngôn thù ghét với người chơi khác.',
            'Spam, quảng cáo dịch vụ/máy chủ khác, phát tán liên kết độc hại hoặc lừa đảo.',
            'Đăng tải, chia sẻ nội dung vi phạm pháp luật, đồi trụy, kích động bạo lực hoặc xâm phạm quyền của người khác.',
            'Tấn công hệ thống (DDoS), dò quét, khai thác lỗ hổng hoặc can thiệp trái phép vào hạ tầng máy chủ.',
            'Mạo danh Ban Quản Trị hoặc người chơi khác.',
          ],
        },
      ],
    },
    {
      id: 'ung-ho',
      heading: '6. Ủng hộ và quyền lợi trong game',
      blocks: [
        {
          type: 'p',
          text: 'Việc ủng hộ máy chủ là hoàn toàn tự nguyện. Các quyền lợi trong game nhận được mang tính ghi nhận, chỉ có giá trị trong phạm vi máy chủ, không phải hàng hóa và không quy đổi thành tiền mặt hay tài sản bên ngoài.',
        },
        {
          type: 'p',
          text: 'Chi tiết về quy trình, kích hoạt, chính sách hoàn tiền và các quy định khác được nêu trong tài liệu "Quy định ủng hộ".',
        },
      ],
    },
    {
      id: 'so-huu-tri-tue',
      heading: '7. Quyền sở hữu trí tuệ',
      blocks: [
        {
          type: 'p',
          text: 'KingMC không được Mojang AB / Microsoft chấp thuận, tài trợ hoặc xác nhận. "Minecraft" là nhãn hiệu của Mojang AB; mọi nhãn hiệu khác thuộc về chủ sở hữu tương ứng.',
        },
        {
          type: 'p',
          text: 'Các nội dung do KingMC tạo ra (mã nguồn plugin, cấu hình, thiết kế bản đồ, hình ảnh, logo, tên máy chủ) thuộc quyền sở hữu của KingMC. Bạn không được sao chép, phân phối hoặc khai thác thương mại các nội dung này khi chưa có sự đồng ý bằng văn bản.',
        },
      ],
    },
    {
      id: 'noi-dung-nguoi-choi',
      heading: '8. Nội dung do người chơi tạo',
      blocks: [
        {
          type: 'p',
          text: 'Khi tạo nội dung trên máy chủ (công trình xây dựng, tin nhắn, hình ảnh chia sẻ), bạn cấp cho KingMC quyền lưu trữ, sao lưu, hiển thị và sử dụng nội dung đó trong phạm vi cần thiết để vận hành và quảng bá máy chủ. Bạn cam kết nội dung do mình tạo ra không vi phạm quyền của bên thứ ba.',
        },
      ],
    },
    {
      id: 'gioi-han-trach-nhiem',
      heading: '9. Giới hạn trách nhiệm',
      blocks: [
        {
          type: 'list',
          items: [
            'Dịch vụ được cung cấp trên cơ sở "nguyên trạng" và "theo khả năng sẵn có". Chúng tôi không cam kết máy chủ hoạt động liên tục, không gián đoạn hoặc không có lỗi.',
            'KingMC không chịu trách nhiệm cho gián đoạn, mất dữ liệu trong game hoặc thiệt hại phát sinh do sự cố kỹ thuật, bảo trì, tấn công mạng hoặc yếu tố ngoài tầm kiểm soát.',
            'Trong phạm vi pháp luật cho phép, trách nhiệm của KingMC (nếu có) được giới hạn ở giá trị khoản ủng hộ gần nhất mà bạn đã thực hiện.',
          ],
        },
      ],
    },
    {
      id: 'dinh-chi',
      heading: '10. Đình chỉ và chấm dứt',
      blocks: [
        {
          type: 'p',
          text: 'Tùy mức độ vi phạm, BQT có thể áp dụng các biện pháp như nhắc nhở, cấm chat (mute), tạm khóa hoặc khóa vĩnh viễn quyền truy cập, thu hồi quyền lợi, mà không có nghĩa vụ hoàn lại khoản ủng hộ đối với trường hợp vi phạm nghiêm trọng. Quyết định xử lý vi phạm của BQT là quyết định cuối cùng trên cơ sở các quy định đã công bố.',
        },
      ],
    },
    {
      id: 'luat-ap-dung',
      heading: '11. Luật áp dụng và giải quyết tranh chấp',
      blocks: [
        {
          type: 'p',
          text: 'Thỏa thuận này được điều chỉnh bởi pháp luật Việt Nam. Khi phát sinh tranh chấp, các bên ưu tiên giải quyết thông qua thương lượng, hòa giải. Trường hợp không đạt được thỏa thuận, tranh chấp sẽ được đưa ra Tòa án có thẩm quyền tại Việt Nam.',
        },
      ],
    },
    {
      id: 'sua-doi',
      heading: '12. Sửa đổi và hiệu lực',
      blocks: [
        {
          type: 'p',
          text: 'KingMC có thể cập nhật thỏa thuận này để phù hợp với thực tế vận hành và quy định pháp luật. Bản cập nhật được đăng tải công khai trên website. Việc bạn tiếp tục sử dụng dịch vụ sau khi thay đổi có hiệu lực đồng nghĩa với việc chấp thuận nội dung mới.',
        },
      ],
    },
    {
      id: 'lien-he',
      heading: '13. Liên hệ',
      blocks: [
        {
          type: 'p',
          text: 'Mọi thắc mắc về thỏa thuận này, vui lòng liên hệ Ban Quản Trị qua kênh Discord chính thức của KingMC.',
        },
      ],
    },
  ],
}

export default doc
