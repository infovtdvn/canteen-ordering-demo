# Canteen Ordering — GitHub Pages RC4.11

Static partner surface for the current Canteen ABC workflow.

Pages:
- `customer.html`: Món hôm nay + ordering.
- `operations.html`: unified `Cần làm / Chờ giao / Tổng món`.
- `admin.html`: catalog, Món hôm nay, prep mode, staff roles.
- `kitchen.html` and `pickup.html`: compatibility redirects to `operations.html`.

Operational rule: `Cần làm = Mới order + Đã nhận`; `Chờ giao` is completed work and is never counted as production workload.
