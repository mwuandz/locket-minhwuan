# DNS chống thu hồi — minhwuan Locket

## Cách dùng đúng

1. **Lên Gold trước** bằng module Shadowrocket (VPN bật, MitM bật).
2. Kiểm tra trong app Locket đã có Gold.
3. Cài DNS **ngay sau đó**, rồi mới tắt VPN.

## File

| File | Mô tả |
|------|--------|
| `Locket_minhwuan_DNS.mobileconfig` | DNS Cloudflare DoH (an toàn) |
| `Locket_minhwuan_DNS_NextDNS_TEMPLATE.mobileconfig` | Template NextDNS — nên dùng để giữ Gold khi tắt VPN |

## Cài NextDNS (khuyến nghị)

1. Tạo tài khoản miễn phí tại https://nextdns.io
2. Copy **Configuration ID** (vd: `abc123`)
3. Mở file template, thay `YOUR_NEXTDNS_ID` → `abc123`
4. AirDrop / mở `.mobileconfig` bằng **Safari** → Cài đặt
5. Cài đặt chung → VPN & Quản lý thiết bị → Cài profile

## Link module Shadowrocket

```
https://raw.githubusercontent.com/mwuandz/locket-minhwuan/main/Locket_minhwuan.module
```

## Lưu ý

- DNS **không** thay module: không fake Gold, không Photobooth.
- Chỉ giúp **giữ** trạng thái sau khi đã lên Gold bằng module.
- Nếu web/app lỗi sau khi cài DNS: xóa profile hoặc chuyển DNS về Automatic.
