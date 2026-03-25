export const MOCK_ACCOUNTS = Array.from({ length: 50 }).map((_, i) => {
  const id = i + 1;
  const firstNames = [
    "Nguyễn",
    "Trần",
    "Lê",
    "Phạm",
    "Vũ",
    "Hoàng",
    "Đặng",
    "Bùi",
    "Đỗ",
    "Ngô",
  ];
  const lastNames = [
    "Văn A",
    "Văn B",
    "Văn C",
    "Văn D",
    "Thị E",
    "Thị F",
    "Thị G",
    "Thị H",
    "Minh I",
    "Minh K",
  ];
  const types = ["Khách hàng", "Nhân viên", "Quản trị viên"];
  const statuses = ["Đã kích hoạt", "Chưa kích hoạt"];
  const domain = ["adora.edu.vn", "gmail.com", "company.com"][i % 3];

  const name = `${firstNames[i % firstNames.length]} ${lastNames[i % lastNames.length]}`;
  const email = `user${id}@${domain}`;
  const type = types[i % types.length];
  const status = statuses[i % statuses.length];

  const base = new Date(2026, 2, 1);
  const createdAt = new Date(base.getFullYear(), base.getMonth(), base.getDate() + i * 2);

  return { id, name, email, type, status, createdAt };
});

