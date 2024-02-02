/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
const copyList = ["me", "job", "company", "desc"];
function myFunction(id) {
    const heading = document.querySelector(`#text-${id}`);
    const text = heading.innerText || heading.textContent;
    navigator.clipboard.writeText(text);
    const tooltip = document.querySelector(`#copied-${id}`);
    tooltip.innerHTML = "✓";
    function ResetButton() {
        tooltip.innerHTML = "";
    }
    setTimeout(ResetButton, 3000);
}
function accessBtns(value) {
    const copyBtn = document.querySelector(`#copy-${value}`);
    copyBtn.addEventListener("click", () => {
        myFunction(value);
        console.log("Copied!");
    });
}
copyList.map((value, id) => accessBtns(value));


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7OztBQ05BLE1BQU0sUUFBUSxHQUFHLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFFbEQsU0FBUyxVQUFVLENBQUMsRUFBVTtJQUM1QixNQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQWlCLENBQUM7SUFDdEUsTUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLFNBQVMsSUFBSyxPQUFPLENBQUMsV0FBc0IsQ0FBQztJQUNsRSxTQUFTLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUVwQyxNQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQWdCLENBQUM7SUFDdkUsT0FBTyxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUM7SUFFeEIsU0FBUyxXQUFXO1FBQ2xCLE9BQU8sQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFRCxVQUFVLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ2hDLENBQUM7QUFFRCxTQUFTLFVBQVUsQ0FBQyxLQUFhO0lBQy9CLE1BQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsU0FBUyxLQUFLLEVBQUUsQ0FBc0IsQ0FBQztJQUU5RSxPQUFPLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRTtRQUNyQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN6QixDQUFDLENBQUMsQ0FBQztBQUNMLENBQUM7QUFFRCxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN1bWUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdW1lL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdW1lLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJjb25zdCBjb3B5TGlzdCA9IFtcIm1lXCIsIFwiam9iXCIsIFwiY29tcGFueVwiLCBcImRlc2NcIl07XG5cbmZ1bmN0aW9uIG15RnVuY3Rpb24oaWQ6IHN0cmluZykge1xuICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3RleHQtJHtpZH1gKSEgYXMgSFRNTEVsZW1lbnQ7XG4gIGNvbnN0IHRleHQgPSBoZWFkaW5nLmlubmVyVGV4dCB8fCAoaGVhZGluZy50ZXh0Q29udGVudCBhcyBzdHJpbmcpO1xuICBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dCh0ZXh0KTtcblxuICBjb25zdCB0b29sdGlwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2NvcGllZC0ke2lkfWApIGFzIEhUTUxFbGVtZW50O1xuICB0b29sdGlwLmlubmVySFRNTCA9IFwi4pyTXCI7XG5cbiAgZnVuY3Rpb24gUmVzZXRCdXR0b24oKSB7XG4gICAgdG9vbHRpcC5pbm5lckhUTUwgPSBcIlwiO1xuICB9XG5cbiAgc2V0VGltZW91dChSZXNldEJ1dHRvbiwgMzAwMCk7XG59XG5cbmZ1bmN0aW9uIGFjY2Vzc0J0bnModmFsdWU6IHN0cmluZykge1xuICBjb25zdCBjb3B5QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2NvcHktJHt2YWx1ZX1gKSEgYXMgSFRNTElucHV0RWxlbWVudDtcblxuICBjb3B5QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgbXlGdW5jdGlvbih2YWx1ZSk7XG4gICAgY29uc29sZS5sb2coXCJDb3BpZWQhXCIpO1xuICB9KTtcbn1cblxuY29weUxpc3QubWFwKCh2YWx1ZSwgaWQpID0+IGFjY2Vzc0J0bnModmFsdWUpKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==