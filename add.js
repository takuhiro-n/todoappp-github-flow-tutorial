$(document).ready(function() {
    $("#addTodo").click(function() {
        const inputTodo = $("input").val().trim();  // 入力をトリムして空白を削除
        if (inputTodo) {  // 入力が空ではないことを確認
            $("#todoList").append(`<li><input type='checkbox'> ${inputTodo}</li>`);
            $("input").val("");  // 入力フィールドをクリア
        }
    });

    $("#todoList").on("contextmenu", "li", function(event) {
        event.preventDefault();  // デフォルトのコンテキストメニューを無効化
        $(this).toggleClass("completed");  // 取り消し線のクラスをトグル
    });
});