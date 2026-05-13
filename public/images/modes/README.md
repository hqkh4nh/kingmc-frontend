# Mode card thumbnails

Hiện 3 file ảnh trong folder này là **placeholder** tải từ [placehold.co](https://placehold.co). Để thay ảnh thật, chỉ cần **ghi đè đúng tên file**:

- `kingsmp.webp`
- `mega-earth.webp`
- `battle-royale.webp`

Không cần sửa code — `siteConfig.gameModes[].thumbnail` ở `src/config/site.ts` đã trỏ tới đúng path.

## Yêu cầu ảnh thật

- **Format**: WebP (ưu tiên) hoặc PNG. Next.js tự convert sang AVIF/WebP khi serve (đã enable trong `next.config.ts`).
- **Aspect ratio khi render**:
  - Card featured (KingSMP): `5/4` — đề xuất ảnh gốc **1600×1280**.
  - 2 card còn lại (Mega Earth, Battle Royale): `16/10` — đề xuất **1600×1000**.
- Subject nằm gần **center** (object-cover sẽ crop hai cạnh khi viewport khác tỉ lệ).
- **Tone tối** ở rìa giúp text/Chip góc trên dễ đọc — đã có vignette overlay nhưng đừng để rìa quá sáng.
- **Dung lượng**: nhắm <250 KB/ảnh sau khi nén.
