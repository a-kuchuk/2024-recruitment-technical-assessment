// i couldnt figure out how to get data from the .json file lmao ✌️

document.addEventListener("DOMContentLoaded", function() {
    const courses = [
        {
          "course_prefix": "COMP",
          "course_code": 1511,
          "course_title": "Programming Fundamentals",
          "average_stars": 4.8,
          "total_reviews": 68,
          "offered_terms": [
            "Term 1", "Term 2", "Term 3"
          ]
        },
        {
          "course_prefix": "COMP",
          "course_code": 1531,
          "course_title": "Software Engineering Fundamentals",
          "average_stars": 3.9,
          "total_reviews": 47,
          "offered_terms": [
            "Term 1", "Term 2", "Term 3"
          ]
        },
        {
          "course_prefix": "COMP",
          "course_code": 1521,
          "course_title": "Computer Systems Fundamentals",
          "average_stars": 4,
          "total_reviews": 40,
          "offered_terms": [
            "Term 1", "Term 2", "Term 3"
          ]
        },
        {
          "course_prefix": "COMP",
          "course_code": 2521,
          "course_title": "Data Structures and Algorithms",
          "average_stars": 4,
          "total_reviews": 36,
          "offered_terms": [
            "Summer", "Term 1", "Term 2", "Term 3"
          ]
        },
        {
          "course_prefix": "COMP",
          "course_code": 2511,
          "course_title": "Object-Oriented Design & Programming",
          "average_stars": 3,
          "total_reviews": 33,
          "offered_terms": [
            "Term 1", "Term 2", "Term 3"
          ]
        },
        {
          "course_prefix": "COMP",
          "course_code": 3311,
          "course_title": "Database Systems",
          "average_stars": 4,
          "total_reviews": 33,
          "offered_terms": [
            "Term 1", "Term 3"
          ]
        }
      ];

    const container = document.getElementById("coursesContainer");

    courses.forEach(course => {
        const courseDiv = document.createElement("div");
        courseDiv.classList.add("course");

        const courseInfoDiv = document.createElement("div");
        courseInfoDiv.classList.add("course-info");

        const nameCodeDiv = document.createElement("div");
        nameCodeDiv.classList.add("name-code");
        nameCodeDiv.innerHTML = `<span class="course-name">${course.course_prefix}<strong>${course.course_code}</strong></span>`;

        const ratingDiv = document.createElement("div");
        ratingDiv.classList.add("course-rating");
        ratingDiv.textContent = displayStarRating(course.average_stars, course.total_reviews);

        courseInfoDiv.appendChild(nameCodeDiv);
        courseInfoDiv.appendChild(ratingDiv);

        const descriptionDiv = document.createElement("div");
        descriptionDiv.classList.add("course-description");
        descriptionDiv.textContent = course.course_title;

        const termsDiv = document.createElement("div");
        course.offered_terms.forEach(term => {
            const termSpan = document.createElement("span");
            termSpan.classList.add("term");
            termSpan.textContent = term;
            termsDiv.appendChild(termSpan);
        });

        courseDiv.appendChild(courseInfoDiv);
        courseDiv.appendChild(descriptionDiv);
        courseDiv.appendChild(termsDiv);

        container.appendChild(courseDiv);
    });
});


// change heading colour
document.querySelector('.main-heading').addEventListener('click', function() {
  this.style.color = getRandomColor();
});

// Click event for search bar
document.getElementById('search').addEventListener('click', function() {
  // Show basic div
});

// oooo random colour generator
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

//makes sort by the dafault dropdown cuz idk how else to do it ✌️
document.addEventListener('DOMContentLoaded', function() {
    var dropdown = document.getElementById('dropdown');
    dropdown.value = 'sortBy';
  });

// gets rating in stars 
//AND ADDS REVIEWS
function displayStarRating(rating, reviews) {
    const stars = '⭐'; 

    const starRating = stars.repeat(Math.floor(rating)); 

    return `${starRating} (${reviews} reviews)`; 
}