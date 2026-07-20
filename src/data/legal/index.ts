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
