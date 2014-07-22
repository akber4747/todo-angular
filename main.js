function ToDoCtrl($scope){
	//initialize todo list
	$scope.todos = [
		
	];
	// function to add to the list
	$scope.addTodo = function(){
		var newTodo = {
			done: false, text: $scope.todoText
		};
		$scope.todos.push(newTodo);
		$scope.todoText = "";
	};
	//function to remove from the lists
	$scope.removeTodo = function(start){
		$scope.todos.splice(start, 1);
	};
	// function to move an item down
	$scope.move = function(index, direction){
		//if moving up, we want index = index -1

		if(direction === "up"){
			if(index === 0){
				return;
			}
			index = index -1;
		}
		if(direction === "down"){
			if(index === $scope.todos.length -1){
			return;
		}	
		}
		

		var todo = $scope.todos[index];
		//takes todo (third parameter), and adds it at index+2 (first parameter); 2nd parameter just says we are not deleting anything, yet
		$scope.todos.splice(index + 2, 0, todo);
		$scope.todos.splice(index, 1);
		//start
		//a
		//b
		//c

		//middle step: copy todo at index and move it down two (index +2)
		//a
		//b
		//a
		//c

		//end
		//b
		//a
		//c
	};
}