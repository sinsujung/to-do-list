/**
 * to do list
 * 1. 헤더에 오늘 날짜 불러오기 o
 * 2. 할 일 등록 하는 입력 창 o
 * 3. list 목록 보여지게 o
 * 4. 할 일 완료 버튼 o
 * 5. 할 일 삭제 버튼 o
 * 6. 완료 버튼 클릭 시 선으로 긋기 o
 * 7. 할 일 수정 버튼 o
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
        const updateButtons = document.createElement("button");
        const deleteButtons = document.createElement("button");
        var completeState = false;

        // 완료 버튼 이벤트 & 스타일
        completeButtons.addEventListener('click', () => {
            if(completeState == false) {
            completeState = true;
            todoLists.style.textDecoration = "line-through"
            completeButtons.textContent = "완료됨"
            }
            else if(completeState == true) {
                completeState = false;
                todoLists.style.textDecoration = "none"
                completeButtons.textContent = "완료"
            }
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

        // 수정 버튼 이벤트 & 스타일
        updateButtons.addEventListener('click', () => {
            let updateTodo = prompt("변경할 내용을 입력해주세요.");
            todoLists.textContent = updateTodo;
            todoLists.appendChild(completeButtons);
            todoLists.appendChild(updateButtons);
            todoLists.appendChild(deleteButtons);
        });
        updateButtons.textContent = "수정";
        updateButtons.style.marginLeft = "3px";
        // li에 내용 및 버튼 추가
        todoLists.appendChild(txt_todoList);
        todoLists.appendChild(completeButtons);
        todoLists.appendChild(updateButtons);
        todoLists.appendChild(deleteButtons);

        document.getElementById("addTodo").appendChild(todoLists);
        document.getElementById("input-box").value = "";

        }
    });
}
