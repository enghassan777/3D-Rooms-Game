let currentRoom = 1;
function openRoom(roomNumber) {
    document.querySelectorAll('.room').forEach(room => room.classList.remove('active'));
    document.getElementById(`room${roomNumber}`).classList.add('active');
    if (roomNumber < 10) {
        document.getElementById(`door${roomNumber + 1}`).style.display = 'block';
    }
}
