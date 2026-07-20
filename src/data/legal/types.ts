/** Một khối nội dung trong trang pháp lý. */
export type LegalBlock =
  | { type: 'p'; text: string }
  | { type: 'list'; items: string[] }
  | { type: 'subheading'; text: string }

/** Một mục (có tiêu đề + neo) trong tài liệu pháp lý. */
export interface LegalSection {
  /** Dùng cho anchor `#id` và mục lục. */
  id: string
  heading: string
  blocks: LegalBlock[]
}

/** Một tài liệu pháp lý hoàn chỉnh (thỏa thuận, chính sách...). */
export interface LegalDoc {
  slug: string
  title: string
  summary: string
  /** Ngày cập nhật, dạng ISO `YYYY-MM-DD`. */
  updatedAt: string
  sections: LegalSection[]
}
