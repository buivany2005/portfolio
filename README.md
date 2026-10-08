Website portfolio cá nhân của **Bùi Văn Ý**, sinh viên ngành **Công nghệ thông tin**, chuyên ngành **Software (Full Stack)**.

## Công nghệ

- HTML5
- CSS3
- JavaScript thuần
- EmailJS cho form liên hệ

## Cấu trúc

- `index.html`: Nội dung và cấu trúc website.
- `style.css`: Giao diện, responsive và animation.
- `script.js`: Menu mobile, hiệu ứng cuộn và kiểm tra form liên hệ.
- `img/`: Hình ảnh dùng trong portfolio.

## Chạy website

Mở trực tiếp `index.html` bằng trình duyệt hoặc sử dụng Live Server trong VS Code.

Thông tin liên hệ, học vấn, kỹ năng và dự án hiện có thể được cập nhật trực tiếp trong `index.html`.

## Form liên hệ

Form sử dụng EmailJS để gửi đồng thời:

- Nội dung khách hàng đến `ybv7069@gmail.com`.
- Email HTML xác nhận đến địa chỉ khách hàng nhập trong form.

Bạn cần điền `publicKey`, `serviceId`, `ownerTemplateId` và
`customerTemplateId` trong `src/script.js` sau khi tạo tài khoản EmailJS.

### Biến EmailJS

Template gửi cho bạn nên đặt người nhận cố định là `ybv7069@gmail.com` và
dùng các biến giống form EmailJS:

```text
{{user_name}}
{{user_email}}
{{message}}
{{link_tai_lieu}}
```

Template gửi cho khách hàng đặt trường **To email** là `{{user_email}}`. Nội
dung HTML có thể dùng mẫu sau:

```html
<div
  style="max-width:812px;margin:auto;font-family:Arial,sans-serif;color:#444;line-height:1.7"
>
  <h2 style="background:#1769c2;color:#fff;padding:16px 22px;border-radius:8px">
    Cảm ơn bạn đã liên hệ!
  </h2>
  <p>Kính chào <strong>{{user_name}}</strong>,</p>
  <p>Cảm ơn bạn đã gửi lời nhắn qua Website Portfolio của tôi.</p>
  <p>Tôi xác nhận đã nhận được nội dung bạn gửi như sau:</p>
  <div
    style="background:#f1f5f9;border-left:5px solid #1769c2;padding:16px 20px;border-radius:8px"
  >
    <p style="white-space:pre-wrap">{{message}}</p>
    <hr />
    <strong>📎 Link đính kèm:</strong>
    <a href="{{link_tai_lieu}}">{{link_tai_lieu}}</a>
  </div>
  <p>Tôi sẽ xem xét và phản hồi lại sớm nhất có thể qua email này.</p>
  <hr />
  <p>
    Trân trọng,<br /><strong>Bùi Văn Ý</strong><br />
    Email: <a href="mailto:ybv7069@gmail.com">ybv7069@gmail.com</a><br />
    Website Portfolio cá nhân
  </p>
</div>
```
