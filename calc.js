/**
 * js file for calc.html
 */

/**
 * - Javascript runs after page is fully loaded. - Used lexical scoping to avoid
 * polluting global namespace. - Used anonymous functions everywhere. - The
 * calculator loads with the displaying showing zero.
 */
window.onload = (function() {

	/**
	 * - variable tempStorage stores the numbers that are pressed from
	 * calculator. - variable state stores the entire expression which gets
	 * evaluated by the eval function of js once the user presses the equals
	 * button.
	 */
	var tempStorage = "";
	var state = "";

	/**
	 * This function is executed each time the user presses button 7 and 7 gets
	 * stored to tempStorage.
	 */
	var b7 = function() {
		tempStorage = tempStorage + "7";
		document.getElementById("tb1").value = tempStorage;
	}
	document.getElementById("button7").addEventListener("click", b7);

	/**
	 * This function is executed each time the user presses button 8 and 8 gets
	 * stored to tempStorage.
	 */
	var b8 = function() {
		tempStorage = tempStorage + "8";
		document.getElementById("tb1").value = tempStorage;
	}
	document.getElementById("button8").addEventListener("click", b8);

	/**
	 * This function is executed each time the user presses button 9 and 9 gets
	 * stored to tempStorage.
	 */
	var b9 = function() {
		tempStorage = tempStorage + "9";
		document.getElementById("tb1").value = tempStorage;
	}
	document.getElementById("button9").addEventListener("click", b9);

	/**
	 * This function is executed each time the user presses button 4 and 4 gets
	 * stored to tempStorage.
	 */
	var b4 = function() {
		tempStorage = tempStorage + "4";
		document.getElementById("tb1").value = tempStorage;
	}
	document.getElementById("button4").addEventListener("click", b4);

	/**
	 * This function is executed each time the user presses button 5 and 5 gets
	 * stored to tempStorage.
	 */
	var b5 = function() {
		tempStorage = tempStorage + "5";
		document.getElementById("tb1").value = tempStorage;
	}
	document.getElementById("button5").addEventListener("click", b5);

	/**
	 * This function is executed each time the user presses button 6 and 6 gets
	 * stored to tempStorage.
	 */
	var b6 = function() {
		tempStorage = tempStorage + "6";
		document.getElementById("tb1").value = tempStorage;
	}
	document.getElementById("button6").addEventListener("click", b6);

	/**
	 * This function is executed each time the user presses button 1 and 1 gets
	 * stored to tempStorage.
	 */
	var b1 = function() {
		tempStorage = tempStorage + "1";
		document.getElementById("tb1").value = tempStorage;
	}
	document.getElementById("button1").addEventListener("click", b1);

	/**
	 * This function is executed each time the user presses button 2 and 2 gets
	 * stored to tempStorage.
	 */
	var b2 = function() {
		tempStorage = tempStorage + "2";
		document.getElementById("tb1").value = tempStorage;
	}
	document.getElementById("button2").addEventListener("click", b2);

	/**
	 * This function is executed each time the user presses button 3 and 3 gets
	 * stored to tempStorage.
	 */
	var b3 = function() {
		tempStorage = tempStorage + "3";
		document.getElementById("tb1").value = tempStorage;
	}
	document.getElementById("button3").addEventListener("click", b3);

	/**
	 * This function is executed each time the user presses button 0 and 0 gets
	 * stored to tempStorage.
	 */
	var b0 = function() {
		tempStorage = tempStorage + "0";
		document.getElementById("tb1").value = tempStorage;
	}
	document.getElementById("button0").addEventListener("click", b0);

	/**
	 * This function is executed each time the user presses the clear (C)
	 * button. It displays zero in calculator screen and empties the tempStorage
	 * and state variables.
	 */
	var bClear = function() {
		document.getElementById("tb1").value = "0";
		tempStorage = "";
		state = "";
	}
	document.getElementById("buttonClear").addEventListener("click", bClear);

	/**
	 * This function is executed to display a decimal number on calculator
	 * screen. If the user presses "." button multiple times it should display
	 * "." only once.
	 */
	var bDecimal = function() {
		var length = tempStorage.length;
		if (tempStorage.charAt(length - 1) != ".") {
			tempStorage = tempStorage + ".";
		}
		document.getElementById("tb1").value = tempStorage;
	}
	document.getElementById("buttonDecimal")
			.addEventListener("click", bDecimal);

	/**
	 * The function is executed if the user presses the "/" button. It stores
	 * everyting in the state variable along with the / sign.
	 */
	var bDivide = function() {
		state = state + tempStorage;
		var length = state.length;
		if (state.charAt(length - 1) != "/" && state.charAt(length - 1) != "*"
				&& state.charAt(length - 1) != "+"
				&& state.charAt(length - 1) != "-"
				&& state.charAt(length - 1) != ".") {
			state = state + "/";
			document.getElementById("tb1").value = tempStorage;
			tempStorage = "";
		}
	}
	document.getElementById("buttonDivide").addEventListener("click", bDivide);

	/**
	 * The function is executed if the user presses the "*" button. It stores
	 * everyting in the state variable along with the * sign.
	 */
	var bMultiply = function() {
		state = state + tempStorage;
		var length = state.length;
		if (state.charAt(length - 1) != "*" && state.charAt(length - 1) != "/"
				&& state.charAt(length - 1) != "+"
				&& state.charAt(length - 1) != "-"
				&& state.charAt(length - 1) != ".") {
			state = state + "*";
			document.getElementById("tb1").value = tempStorage;
			tempStorage = "";
		}
	}
	document.getElementById("buttonMultiply").addEventListener("click",
			bMultiply);

	/**
	 * The function is executed if the user presses the "-" button. It stores
	 * everyting in the state variable along with the - sign.
	 */
	var bSubtract = function() {
		state = state + tempStorage;
		var length = state.length;
		if (state.charAt(length - 1) != "-" && state.charAt(length - 1) != "*"
				&& state.charAt(length - 1) != "+"
				&& state.charAt(length - 1) != "/"
				&& state.charAt(length - 1) != ".") {
			state = state + "-";
			document.getElementById("tb1").value = tempStorage;
			tempStorage = "";
		}
	}
	document.getElementById("buttonSubtract").addEventListener("click",
			bSubtract);

	/**
	 * The function is executed if the user presses the left side of "=+"
	 * button. It calculates the final expression in state variable using the
	 * eval function and displays the result in the calculator.
	 */
	var bEquals = function() {
		state = state + tempStorage;
		var result = eval(state);
		document.getElementById("tb1").value = result;
		state = result;
		tempStorage = "";
	}
	document.getElementById("buttonEquals").addEventListener("click", bEquals);

	/**
	 * The function is executed if the user presses the right side of "=+"
	 * button. It stores everyting in the state variable along with the + sign.
	 */
	var bAdd = function() {
		state = state + tempStorage;
		var length = state.length;
		if (state.charAt(length - 1) != "+" && state.charAt(length - 1) != "*"
				&& state.charAt(length - 1) != "/"
				&& state.charAt(length - 1) != "-"
				&& state.charAt(length - 1) != ".") {
			state = state + "+";
			document.getElementById("tb1").value = tempStorage;
			tempStorage = "";
		}
	}
	document.getElementById("buttonAdd").addEventListener("click", bAdd);
})();

