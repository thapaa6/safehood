
document.addEventListener("DOMContentLoaded", () => {
  const reports = [
    {
      title: "Suspicious Vehicle",
      date: "May 7, 2025",
      location: "Oak Street, NY",
      desc: "A black SUV was seen circling the neighborhood multiple times.",
      img: "assets/suspicious.jpg"
    },
    {
      title: "Burglary Attempt",
      date: "May 5, 2025",
      location: "Riverdale Apartments, IL",
      desc: "Attempted break-in through a rear window. Nothing stolen.",
      img: "assets/burglary.jpg"
    },
    {
      title: "Package Theft",
      date: "May 3, 2025",
      location: "Elm Avenue, CA",
      desc: "Amazon package stolen from the porch in broad daylight.",
      img: "assets/theft.jpg"
    },
    {
      title: "Vandalism",
      date: "May 6, 2025",
      location: "Parkside Alley, TX",
      desc: "Graffiti found on multiple garage doors overnight.",
      img: "assets/vandalism.jpg"
    },
    {
      title: "Noise Complaint",
      date: "May 4, 2025",
      location: "Broadway Ave, LA",
      desc: "Repeated loud party disturbances reported at midnight.",
      img: "assets/noise.jpg"
    },
    {
      title: "Bike Theft",
      date: "May 2, 2025",
      location: "Central Station, NY",
      desc: "Locked bicycle stolen from rack near the station entrance.",
      img: "assets/bike.jpg"
    }
  ];

  const container = document.getElementById("reportCards");
  if (container) {
    container.innerHTML = ""; // Clear any previous duplicates
    reports.forEach(report => {
      const card = document.createElement("div");
      card.className = "bg-white rounded-lg shadow hover:shadow-lg hover:scale-105 transition transform overflow-hidden";
      card.innerHTML = `
        <img src="${report.img}" alt="${report.title}" class="w-full h-48 object-cover">
        <div class="p-4 text-left">
          <h3 class="text-xl font-bold text-gray-800">${report.title}</h3>
          <p class="text-sm text-gray-500">Date: ${report.date}</p>
          <p class="text-sm text-gray-500">Location: ${report.location}</p>
          <p class="mt-2 text-gray-700">${report.desc}</p>
          <button class="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Report Details</button>
        </div>
      `;
      container.appendChild(card);
    });
  }
});
