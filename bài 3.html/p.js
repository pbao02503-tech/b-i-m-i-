let members = []; // Mảng lưu danh sách thành viên
let editingId = null; // ID của thành viên đang sửa

const member = {
    id: generateId(),
    name: 'Tên',
    email: 'email@example.com',
    createdAt: new Date()
};