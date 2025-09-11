/**
 * to do list
 * 1. 헤더에 오늘 날짜 불러오기 o
 * 2. 할 일 등록 하는 입력 창 o
 * 3. list 목록 보여지게 o
 * 4. 할 일 완료 버튼 o
 * 5. 할 일 삭제 버튼 o
 * 6. 완료 버튼 클릭 시 선으로 긋기 o
 * 7. 완료된 목록은 아래로 가도록 하기
 * 8. 할 일 수정 버튼
 */

const getDate = new Date();

const  today = getDate.toLocaleDateString();

const headerName = document.getElementById("todayTodo");

headerName.textContent = `${today} 할 일`;

// 이벤트
window.onload = function(){

    document.getElementById("add-button").addEventListener('click', function() {

        if(document.getElementById("input-box").value != "") {
        let todoList = document.getElementById("input-box").value;

        const txt_todoList = document.createTextNode(todoList);
        const todoLists = document.createElement("li");
        const completeButtons = document.createElement("button");
        const deleteButtons = document.createElement("button");
    
        // 완료 버튼 이벤트 & 스타일
        completeButtons.addEventListener('click', () => {
            todoLists.style.textDecoration = "line-through"
            completeButtons.textContent = "완료됨"
        });

        todoLists.style.marginTop = '10px';
        completeButtons.style.marginLeft = '10px';
        completeButtons.textContent="완료";

        // 삭제 버튼 이벤트 & 스타일
        deleteButtons.addEventListener('click', () => {
            todoLists.remove();
        });
        deleteButtons.textContent = "삭제";
        deleteButtons.style.marginLeft = "3px";


        todoLists.appendChild(txt_todoList);
        todoLists.appendChild(completeButtons);
        todoLists.appendChild(deleteButtons);

        document.getElementById("addTodo").appendChild(todoLists);
        document.getElementById("input-box").value = "";

        }
    });
}
