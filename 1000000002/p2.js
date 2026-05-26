function renderMembers(searchTerm = '') {
    // Lọc theo từ khóa
    let filteredMembers = members.filter(m =>
        m.name.includes(searchTerm) ||
        m.email.includes(searchTerm)
    );

    // Tạo HTML và cập nhật giao diện
}