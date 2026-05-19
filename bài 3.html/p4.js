renderMembers(); // Hiển thị toàn bộ
renderMembers(searchTerm); // Hiển thị với filter
const member = members.find(m => m.id === editingId);
member.name = newName;
member.email = newEmail;
members = members.filter(m => m.id !== id);