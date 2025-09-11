/**
 * to do list
 * 1. 헤더에 오늘 날짜 불러오기 o
 * 2. 할 일 등록 하는 입력 창 o
 * 3. list 목록 보여지게 o
 * 4. 완료 버튼 클릭 시 선으로 긋기
 * 5. 완료된 목록은 아래로 가도록 하기
 * 6. 할 일 삭제 버튼
 * 7. 할 일 수정 버튼
 */

const getDate = new Date();

const  today = getDate.toLocaleDateString();

const headerName = document.getElementById("todayTodo");

headerName.textContent = `${today} 할 일`;

// 이벤트
window.onload = function(){

    document.getElementById("add-button").addEventListener('click', function() {

        const todoList = document.getElementById("input-box").value;

        const txt_todoList = document.createTextNode(todoList);
        const todoLists = document.createElement("p");

        todoLists.appendChild(txt_todoList);

        document.getElementById("addTodo").appendChild(todoLists);
        document.getElementById("input-box").value = "";
    });
}