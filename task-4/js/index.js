// Form Validation

function formValidation(event) {
  event.preventDefault();
  $(".form-group").removeClass("has-error");
  //   // Put elements in variable
  let error = [];
  let formErrorDisplay = document.querySelector("#errorDisplay");
  formErrorDisplay.innerHTML = "";
  $("#errorMessage").css("display", "none");
  $("#errorMessage").removeClass("alert-success");
  $("#errorMessage").removeClass("alert-danger");

  let $assignedGroup = document.querySelector("#assignedGroup");
  let $taskNumber = document.querySelector("#taskNumber");
  let $taskName = document.querySelector("#taskName");
  let $assignedPerson = document.querySelector("#assignedPerson");
  let $description = document.querySelector("#description");
  let $dueDate = document.querySelector("#dueDate");
  let hasError = false;

  if (!$assignedGroup.value) {
    $(assignedGroup).closest(".form-group").addClass("has-error");
    hasError = true;
  }
  if (!$taskNumber.value) {
    $(taskNumber).closest(".form-group").addClass("has-error");
    hasError = true;
  }
  if (!$taskName.value) {
    $(taskName).closest(".form-group").addClass("has-error");
    hasError = true;
  }

  if (!$assignedPerson.value) {
    $(assignedPerson).closest(".form-group").addClass("has-error");
    hasError = true;
  }
  if (!$description.value) {
    $(description).closest(".form-group").addClass("has-error");
    hasError = true;
  }
  if (!$dueDate.value) {
    $(dueDate).closest(".form-group").addClass("has-error");
    hasError = true;
  }

  if (hasError == true) {
    $("#errorMessage").html("Your form has an error please check");
    $("#errorMessage").addClass("alert-danger");
    $("#errorMessage").css("display", "block");
    return;
  }

  alert("Your form is validated");
}

let formSubmitButton = document.querySelector("#subButton");
formSubmitButton.addEventListener("click", formValidation);
