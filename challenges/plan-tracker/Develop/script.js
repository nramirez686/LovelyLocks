// Function to display the current date
function displayCurrentDate() {
  const currentDate = new Date();
  const day = currentDate.getDate();
  const month = currentDate.toLocaleString("default", { month: "long" });
  const year = currentDate.getFullYear();
  const formattedDate = `${month} ${day}, ${year}`;
  $("#currentDay span").text(formattedDate);
}

// Event listener for user input and saving to local storage
$(document).on("click", ".saveBtn", function () {
  const userInput = $(this).siblings(".description").val();
  const timeBlockId = $(this).parent().attr("id");
  const hourValue = timeBlockId.split("-")[1];
  localStorage.setItem(hourValue, userInput);
});

// Function that applies the correct CSS to each block depending on the time
function applyTimeBlockClasses() {
  const currentHour = dayjs().hour();
  $(".time-block").each(function () {
    const timeBlockHour = parseInt($(this).attr("id").split("-")[1]);
    if (timeBlockHour < currentHour) {
      $(this).removeClass("present future").addClass("past");
    } else if (timeBlockHour === currentHour) {
      $(this).removeClass("past future").addClass("present");
    } else {
      $(this).removeClass("past present").addClass("future");
    }
  });
}

// Function that retrieves previously saved user input
function getSavedUserInputs() {
  $(".time-block").each(function () {
    const timeBlockId = $(this).attr("id");
    const userInput = localStorage.getItem(timeBlockId);

    if (userInput) {
      $(this).find(".description").val(userInput);
    }
  });
}

// Document ready function to execute the code when the DOM is loaded
$(document).ready(function () {
  displayCurrentDate();
  applyTimeBlockClasses();
  getSavedUserInputs();
});
