import type { LegalDoc } from './types'
import thoaThuanNguoiDung from './thoa-thuan-nguoi-dung'
import chinhSachBaoMat from './chinh-sach-bao-mat'
import quyDinhUngHo from './quy-dinh-ung-ho'

export type { LegalDoc, LegalSection, LegalBlock } from './types'

export const LEGAL_DOCS: readonly LegalDoc[] = [thoaThuanNguoiDung, chinhSachBaoMat, quyDinhUngHo]

export const LEGAL_SLUGS = LEGAL_DOCS.map((doc) => doc.slug)

export function getLegalDoc(slug: string): LegalDoc | undefined {
  return LEGAL_DOCS.find((doc) => doc.slug === slug)
}

/** Lưu ý hiển thị ở mọi trang pháp lý: đây là nội dung tham khảo, không phải tư vấn pháp lý. */
export const LEGAL_DISCLAIMER =
  'Nội dung trên mang tính tham khảo, được biên soạn để phù hợp với mô hình máy chủ Minecraft tại Việt Nam và không cấu thành tư vấn pháp lý. Trước khi áp dụng chính thức, bạn nên tham vấn luật sư hoặc chuyên gia pháp lý.'
