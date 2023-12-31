const tickets = [
  {
    id: 1,
    flightNumber: "TK-1234",
    departureAirport: "Adolfo Suárez Madrid–Barajas Airport",
    arrivalAirport: "Atatürk International Airport",
    departureDate: "2023-12-01",
    departureTime: "10:00",
    arrivalTime: "14:05",
    price: 100,
    currency: "$",
    departureAirportId: 1,
    arrivalAirportId: 3,
    departureCountry: "Spain",
    arrivalCountry: "Turkey",
  },
  {
    id: 2,
    flightNumber: "TK-1235",
    departureAirport: "Amsterdam Airport Schiphol",
    arrivalAirport: "Atatürk International Airport",
    departureDate: "2024-12-01",
    departureTime: "11:00",
    arrivalTime: "15:05",
    price: 200,
    currency: "$",
    departureAirportId: 2,
    arrivalAirportId: 3,
    departureCountry: "Netherlands",
    arrivalCountry: "Turkey",
  },
  {
    id: 3,
    flightNumber: "BA-5678",
    departureAirport: "Heathrow Airport",
    arrivalAirport: "Barcelona–El Prat Airport",
    departureDate: "2023-12-02",
    departureTime: "12:30",
    arrivalTime: "15:45",
    price: 150,
    currency: "£",
    departureAirportId: 6,
    arrivalAirportId: 4,
    departureCountry: "United Kingdom",
    arrivalCountry: "Spain",
  },
  {
    id: 4,
    flightNumber: "JL-6789",
    departureAirport: "Tokyo Haneda Airport",
    arrivalAirport: "Sydney Airport",
    departureDate: "2024-01-15",
    departureTime: "18:00",
    arrivalTime: "08:30",
    price: 350,
    currency: "¥",
    departureAirportId: 11,
    arrivalAirportId: 12,
    departureCountry: "Japan",
    arrivalCountry: "Australia",
  },
  {
    id: 5,
    flightNumber: "LH-9101",
    departureAirport: "Munich Airport",
    arrivalAirport: "Los Angeles International Airport",
    departureDate: "2023-11-25",
    departureTime: "08:45",
    arrivalTime: "14:30",
    price: 280,
    currency: "€",
    departureAirportId: 13,
    arrivalAirportId: 10,
    departureCountry: "Germany",
    arrivalCountry: "United States",
  },
  {
    id: 6,
    flightNumber: "SQ-1236",
    departureAirport: "Singapore Changi Airport",
    arrivalAirport: "Toronto Pearson International Airport",
    departureDate: "2023-12-10",
    departureTime: "20:00",
    arrivalTime: "01:45",
    price: 320,
    currency: "SGD",
    departureAirportId: 14,
    arrivalAirportId: 15,
    departureCountry: "Singapore",
    arrivalCountry: "Canada",
  },
  {
    id: 7,
    flightNumber: "SW-4567",
    departureAirport: "Stockholm Arlanda Airport",
    arrivalAirport: "Zurich Airport",
    departureDate: "2023-11-28",
    departureTime: "14:15",
    arrivalTime: "16:30",
    price: 180,
    currency: "SEK",
    departureAirportId: 29,
    arrivalAirportId: 19,
    departureCountry: "Sweden",
    arrivalCountry: "Switzerland",
  },
  {
    id: 8,
    flightNumber: "EK-7890",
    departureAirport: "Dubai International Airport",
    arrivalAirport: "Hong Kong International Airport",
    departureDate: "2023-12-05",
    departureTime: "16:30",
    arrivalTime: "23:15",
    price: 250,
    currency: "AED",
    departureAirportId: 8,
    arrivalAirportId: 23,
    departureCountry: "United Arab Emirates",
    arrivalCountry: "Hong Kong",
  },
  {
    id: 9,
    flightNumber: "CA-3456",
    departureAirport: "Beijing Capital International Airport",
    arrivalAirport: "San Francisco International Airport",
    departureDate: "2023-12-15",
    departureTime: "13:45",
    arrivalTime: "18:30",
    price: 280,
    currency: "¥",
    departureAirportId: 9,
    arrivalAirportId: 20,
    departureCountry: "China",
    arrivalCountry: "United States",
  },
  {
    id: 10,
    flightNumber: "QF-7891",
    departureAirport: "Sydney Airport",
    arrivalAirport: "Jomo Kenyatta International Airport",
    departureDate: "2024-02-01",
    departureTime: "09:00",
    arrivalTime: "17:45",
    price: 320,
    currency: "$",
    departureAirportId: 12,
    arrivalAirportId: 34,
    departureCountry: "Australia",
    arrivalCountry: "Kenya",
  },
  {
    id: 11,
    flightNumber: "DL-5678",
    departureAirport: "Hartsfield-Jackson Atlanta International Airport",
    arrivalAirport: "Vienna International Airport",
    departureDate: "2023-12-20",
    departureTime: "16:15",
    arrivalTime: "20:30",
    price: 200,
    currency: "$",
    departureAirportId: 17,
    arrivalAirportId: 22,
    departureCountry: "United States",
    arrivalCountry: "Austria",
  },
  {
    id: 12,
    flightNumber: "EY-1237",
    departureAirport: "Abu Dhabi International Airport",
    arrivalAirport: "Cape Town International Airport",
    departureDate: "2023-11-30",
    departureTime: "14:30",
    arrivalTime: "21:15",
    price: 300,
    currency: "AED",
    departureAirportId: 29,
    arrivalAirportId: 25,
    departureCountry: "United Arab Emirates",
    arrivalCountry: "South Africa",
  },
  {
    id: 13,
    flightNumber: "AF-4568",
    departureAirport: "Charles de Gaulle Airport",
    arrivalAirport: "Prague Václav Havel Airport",
    departureDate: "2023-12-08",
    departureTime: "10:45",
    arrivalTime: "13:30",
    price: 180,
    currency: "€",
    departureAirportId: 7,
    arrivalAirportId: 32,
    departureCountry: "France",
    arrivalCountry: "Czech Republic",
  },
  {
    id: 14,
    flightNumber: "KL-8902",
    departureAirport: "Amsterdam Airport Schiphol",
    arrivalAirport: "Brisbane Airport",
    departureDate: "2023-12-25",
    departureTime: "08:00",
    arrivalTime: "19:30",
    price: 250,
    currency: "€",
    departureAirportId: 2,
    arrivalAirportId: 33,
    departureCountry: "Netherlands",
    arrivalCountry: "Australia",
  },
  {
    id: 15,
    flightNumber: "AI-2345",
    departureAirport: "Indira Gandhi International Airport",
    arrivalAirport: "Washington Dulles International Airport",
    departureDate: "2023-12-12",
    departureTime: "17:30",
    arrivalTime: "21:45",
    price: 320,
    currency: "₹",
    departureAirportId: 30,
    arrivalAirportId: 35,
    departureCountry: "India",
    arrivalCountry: "United States",
  },
  {
    id: 16,
    flightNumber: "QF-5679",
    departureAirport: "Sydney Airport",
    arrivalAirport: "Marrakech Menara Airport",
    departureDate: "2024-01-10",
    departureTime: "14:00",
    arrivalTime: "19:45",
    price: 290,
    currency: "$",
    departureAirportId: 12,
    arrivalAirportId: 26,
    departureCountry: "Australia",
    arrivalCountry: "Morocco",
  },
  {
    id: 17,
    flightNumber: "UA-7892",
    departureAirport: "Denver International Airport",
    arrivalAirport: "O'Hare International Airport",
    departureDate: "2023-12-18",
    departureTime: "11:15",
    arrivalTime: "14:45",
    price: 200,
    currency: "$",
    departureAirportId: 24,
    arrivalAirportId: 27,
    departureCountry: "United States",
    arrivalCountry: "United States",
  },
  {
    id: 18,
    flightNumber: "LX-1238",
    departureAirport: "Zurich Airport",
    arrivalAirport: "Mactan–Cebu International Airport",
    departureDate: "2023-12-05",
    departureTime: "09:30",
    arrivalTime: "16:15",
    price: 230,
    currency: "CHF",
    departureAirportId: 19,
    arrivalAirportId: 28,
    departureCountry: "Switzerland",
    arrivalCountry: "Philippines",
  },
  {
    id: 19,
    flightNumber: "AC-4569",
    departureAirport: "Toronto Pearson International Airport",
    arrivalAirport: "Rome Fiumicino Airport",
    departureDate: "2023-12-22",
    departureTime: "16:45",
    arrivalTime: "20:30",
    price: 270,
    currency: "CAD",
    departureAirportId: 15,
    arrivalAirportId: 16,
    departureCountry: "Canada",
    arrivalCountry: "Italy",
  },
  {
    id: 20,
    flightNumber: "DL-8903",
    departureAirport: "Hartsfield-Jackson Atlanta International Airport",
    arrivalAirport: "Incheon International Airport",
    departureDate: "2024-01-05",
    departureTime: "14:30",
    arrivalTime: "20:15",
    price: 300,
    currency: "$",
    departureAirportId: 17,
    arrivalAirportId: 18,
    departureCountry: "United States",
    arrivalCountry: "South Korea",
  },
  {
    id: 21,
    flightNumber: "LH-2346",
    departureAirport: "Munich Airport",
    arrivalAirport: "Zurich Airport",
    departureDate: "2023-12-17",
    departureTime: "10:15",
    arrivalTime: "12:30",
    price: 180,
    currency: "€",
    departureAirportId: 13,
    arrivalAirportId: 19,
    departureCountry: "Germany",
    arrivalCountry: "Switzerland",
  },
  {
    id: 22,
    flightNumber: "EK-6780",
    departureAirport: "Dubai International Airport",
    arrivalAirport: "San Francisco International Airport",
    departureDate: "2023-12-28",
    departureTime: "18:00",
    arrivalTime: "22:45",
    price: 250,
    currency: "AED",
    departureAirportId: 8,
    arrivalAirportId: 20,
    departureCountry: "United Arab Emirates",
    arrivalCountry: "United States",
  },
  {
    id: 23,
    flightNumber: "SQ-1239",
    departureAirport: "Singapore Changi Airport",
    arrivalAirport: "São Paulo/Guarulhos Airport",
    departureDate: "2024-02-15",
    departureTime: "20:30",
    arrivalTime: "05:15",
    price: 320,
    currency: "SGD",
    departureAirportId: 14,
    arrivalAirportId: 21,
    departureCountry: "Singapore",
    arrivalCountry: "Brazil",
  },
  {
    id: 24,
    flightNumber: "AI-5670",
    departureAirport: "Indira Gandhi International Airport",
    arrivalAirport: "Vienna International Airport",
    departureDate: "2024-01-20",
    departureTime: "12:45",
    arrivalTime: "17:00",
    price: 200,
    currency: "₹",
    departureAirportId: 30,
    arrivalAirportId: 22,
    departureCountry: "India",
    arrivalCountry: "Austria",
  },
  {
    id: 25,
    flightNumber: "QR-8904",
    departureAirport: "Hamad International Airport",
    arrivalAirport: "Hong Kong International Airport",
    departureDate: "2023-12-10",
    departureTime: "15:15",
    arrivalTime: "21:00",
    price: 280,
    currency: "QAR",
    departureAirportId: 31,
    arrivalAirportId: 23,
    departureCountry: "Qatar",
    arrivalCountry: "Hong Kong",
  },
  {
    id: 26,
    flightNumber: "BA-2347",
    departureAirport: "Heathrow Airport",
    arrivalAirport: "Marrakech Menara Airport",
    departureDate: "2023-12-13",
    departureTime: "09:30",
    arrivalTime: "15:15",
    price: 220,
    currency: "£",
    departureAirportId: 6,
    arrivalAirportId: 26,
    departureCountry: "United Kingdom",
    arrivalCountry: "Morocco",
  },
  {
    id: 27,
    flightNumber: "KL-6781",
    departureAirport: "Amsterdam Airport Schiphol",
    arrivalAirport: "Cape Town International Airport",
    departureDate: "2024-01-02",
    departureTime: "08:00",
    arrivalTime: "16:45",
    price: 310,
    currency: "€",
    departureAirportId: 2,
    arrivalAirportId: 25,
    departureCountry: "Netherlands",
    arrivalCountry: "South Africa",
  },
  {
    id: 28,
    flightNumber: "TK-1240",
    departureAirport: "Atatürk International Airport",
    arrivalAirport: "Kuala Lumpur International Airport",
    departureDate: "2023-12-05",
    departureTime: "17:45",
    arrivalTime: "23:30",
    price: 260,
    currency: "$",
    departureAirportId: 3,
    arrivalAirportId: 31,
    departureCountry: "Turkey",
    arrivalCountry: "Malaysia",
  },
  {
    id: 29,
    flightNumber: "SQ-7895",
    departureAirport: "Singapore Changi Airport",
    arrivalAirport: "Brisbane Airport",
    departureDate: "2024-01-18",
    departureTime: "19:30",
    arrivalTime: "07:15",
    price: 330,
    currency: "SGD",
    departureAirportId: 14,
    arrivalAirportId: 33,
    departureCountry: "Singapore",
    arrivalCountry: "Australia",
  },
  {
    id: 30,
    flightNumber: "EK-5672",
    departureAirport: "Dubai International Airport",
    arrivalAirport: "Toronto Pearson International Airport",
    departureDate: "2023-12-27",
    departureTime: "15:45",
    arrivalTime: "21:30",
    price: 280,
    currency: "AED",
    departureAirportId: 8,
    arrivalAirportId: 15,
    departureCountry: "United Arab Emirates",
    arrivalCountry: "Canada",
  },
  {
    id: 31,
    flightNumber: "LH-2348",
    departureAirport: "Frankfurt Airport",
    arrivalAirport: "Los Angeles International Airport",
    departureDate: "2024-02-10",
    departureTime: "11:00",
    arrivalTime: "15:45",
    price: 300,
    currency: "€",
    departureAirportId: 36,
    arrivalAirportId: 10,
    departureCountry: "Germany",
    arrivalCountry: "United States",
  },
  {
    id: 32,
    flightNumber: "QF-8905",
    departureAirport: "Sydney Airport",
    arrivalAirport: "Nairobi Jomo Kenyatta International Airport",
    departureDate: "2023-12-08",
    departureTime: "16:30",
    arrivalTime: "23:15",
    price: 320,
    currency: "$",
    departureAirportId: 12,
    arrivalAirportId: 34,
    departureCountry: "Australia",
    arrivalCountry: "Kenya",
  },
  {
    id: 33,
    flightNumber: "AF-2349",
    departureAirport: "Charles de Gaulle Airport",
    arrivalAirport: "Vienna International Airport",
    departureDate: "2023-12-15",
    departureTime: "14:45",
    arrivalTime: "19:00",
    price: 200,
    currency: "€",
    departureAirportId: 7,
    arrivalAirportId: 22,
    departureCountry: "France",
    arrivalCountry: "Austria",
  },
  {
    id: 34,
    flightNumber: "UA-6783",
    departureAirport: "San Francisco International Airport",
    arrivalAirport: "Incheon International Airport",
    departureDate: "2024-01-03",
    departureTime: "10:00",
    arrivalTime: "15:45",
    price: 260,
    currency: "$",
    departureAirportId: 20,
    arrivalAirportId: 18,
    departureCountry: "United States",
    arrivalCountry: "South Korea",
  },
  {
    id: 35,
    flightNumber: "QR-1241",
    departureAirport: "Hamad International Airport",
    arrivalAirport: "Marrakech Menara Airport",
    departureDate: "2023-12-12",
    departureTime: "12:15",
    arrivalTime: "17:00",
    price: 220,
    currency: "QAR",
    departureAirportId: 31,
    arrivalAirportId: 26,
    departureCountry: "Qatar",
    arrivalCountry: "Morocco",
  },
  {
    id: 36,
    flightNumber: "BA-5674",
    departureAirport: "Heathrow Airport",
    arrivalAirport: "Denver International Airport",
    departureDate: "2023-12-20",
    departureTime: "17:30",
    arrivalTime: "21:45",
    price: 240,
    currency: "£",
    departureAirportId: 6,
    arrivalAirportId: 24,
    departureCountry: "United Kingdom",
    arrivalCountry: "United States",
  },
  {
    id: 37,
    flightNumber: "KL-8906",
    departureAirport: "Amsterdam Airport Schiphol",
    arrivalAirport: "O'Hare International Airport",
    departureDate: "2023-12-25",
    departureTime: "08:45",
    arrivalTime: "13:30",
    price: 280,
    currency: "€",
    departureAirportId: 2,
    arrivalAirportId: 27,
    departureCountry: "Netherlands",
    arrivalCountry: "United States",
  },
  {
    id: 38,
    flightNumber: "TK-1242",
    departureAirport: "Atatürk International Airport",
    arrivalAirport: "Prague Václav Havel Airport",
    departureDate: "2023-12-28",
    departureTime: "14:00",
    arrivalTime: "16:45",
    price: 180,
    currency: "$",
    departureAirportId: 3,
    arrivalAirportId: 32,
    departureCountry: "Turkey",
    arrivalCountry: "Czech Republic",
  },
  {
    id: 39,
    flightNumber: "EY-6785",
    departureAirport: "Abu Dhabi International Airport",
    arrivalAirport: "Kuala Lumpur International Airport",
    departureDate: "2023-12-05",
    departureTime: "20:15",
    arrivalTime: "02:00",
    price: 310,
    currency: "AED",
    departureAirportId: 30,
    arrivalAirportId: 31,
    departureCountry: "United Arab Emirates",
    arrivalCountry: "Malaysia",
  },
  {
    id: 40,
    flightNumber: "AC-2350",
    departureAirport: "Toronto Pearson International Airport",
    arrivalAirport: "Mactan–Cebu International Airport",
    departureDate: "2023-12-15",
    departureTime: "12:30",
    arrivalTime: "19:15",
    price: 230,
    currency: "CAD",
    departureAirportId: 15,
    arrivalAirportId: 28,
    departureCountry: "Canada",
    arrivalCountry: "Philippines",
  },
  {
    id: 41,
    flightNumber: "TK-1243",
    departureAirport: "Adolfo Suárez Madrid–Barajas Airport",
    arrivalAirport: "Amsterdam Airport Schiphol",
    departureDate: "2023-12-01",
    departureTime: "08:00",
    arrivalTime: "10:15",
    price: 120,
    currency: "€",
    departureAirportId: 1,
    arrivalAirportId: 2,
    departureCountry: "Spain",
    arrivalCountry: "Netherlands",
  },
  {
    id: 42,
    flightNumber: "KL-5676",
    departureAirport: "Adolfo Suárez Madrid–Barajas Airport",
    arrivalAirport: "Amsterdam Airport Schiphol",
    departureDate: "2023-12-01",
    departureTime: "10:30",
    arrivalTime: "12:45",
    price: 150,
    currency: "€",
    departureAirportId: 1,
    arrivalAirportId: 2,
    departureCountry: "Spain",
    arrivalCountry: "Netherlands",
  },
  {
    id: 43,
    flightNumber: "IB-8907",
    departureAirport: "Adolfo Suárez Madrid–Barajas Airport",
    arrivalAirport: "Amsterdam Airport Schiphol",
    departureDate: "2023-12-01",
    departureTime: "12:00",
    arrivalTime: "14:15",
    price: 130,
    currency: "€",
    departureAirportId: 1,
    arrivalAirportId: 2,
    departureCountry: "Spain",
    arrivalCountry: "Netherlands",
  },
  {
    id: 44,
    flightNumber: "AF-1244",
    departureAirport: "Adolfo Suárez Madrid–Barajas Airport",
    arrivalAirport: "Amsterdam Airport Schiphol",
    departureDate: "2023-12-01",
    departureTime: "14:45",
    arrivalTime: "17:00",
    price: 140,
    currency: "€",
    departureAirportId: 1,
    arrivalAirportId: 2,
    departureCountry: "Spain",
    arrivalCountry: "Netherlands",
  },
  {
    id: 45,
    flightNumber: "HV-5677",
    departureAirport: "Adolfo Suárez Madrid–Barajas Airport",
    arrivalAirport: "Amsterdam Airport Schiphol",
    departureDate: "2023-12-01",
    departureTime: "16:30",
    arrivalTime: "18:45",
    price: 120,
    currency: "€",
    departureAirportId: 1,
    arrivalAirportId: 2,
    departureCountry: "Spain",
    arrivalCountry: "Netherlands",
  },
  {
    id: 46,
    flightNumber: "VY-8908",
    departureAirport: "Adolfo Suárez Madrid–Barajas Airport",
    arrivalAirport: "Amsterdam Airport Schiphol",
    departureDate: "2023-12-01",
    departureTime: "18:15",
    arrivalTime: "20:30",
    price: 130,
    currency: "€",
    departureAirportId: 1,
    arrivalAirportId: 2,
    departureCountry: "Spain",
    arrivalCountry: "Netherlands",
  },
  {
    id: 47,
    flightNumber: "EZY-1245",
    departureAirport: "Adolfo Suárez Madrid–Barajas Airport",
    arrivalAirport: "Amsterdam Airport Schiphol",
    departureDate: "2023-12-01",
    departureTime: "20:00",
    arrivalTime: "22:15",
    price: 140,
    currency: "€",
    departureAirportId: 1,
    arrivalAirportId: 2,
    departureCountry: "Spain",
    arrivalCountry: "Netherlands",
  },
  {
    id: 48,
    flightNumber: "BA-5678",
    departureAirport: "Adolfo Suárez Madrid–Barajas Airport",
    arrivalAirport: "Amsterdam Airport Schiphol",
    departureDate: "2023-12-01",
    departureTime: "22:30",
    arrivalTime: "00:45",
    price: 150,
    currency: "€",
    departureAirportId: 1,
    arrivalAirportId: 2,
    departureCountry: "Spain",
    arrivalCountry: "Netherlands",
  },
  {
    id: 49,
    flightNumber: "TK-1246",
    departureAirport: "Adolfo Suárez Madrid–Barajas Airport",
    arrivalAirport: "Amsterdam Airport Schiphol",
    departureDate: "2023-12-01",
    departureTime: "23:45",
    arrivalTime: "02:00",
    price: 120,
    currency: "€",
    departureAirportId: 1,
    arrivalAirportId: 2,
    departureCountry: "Spain",
    arrivalCountry: "Netherlands",
  },
  {
    id: 50,
    flightNumber: "KL-6789",
    departureAirport: "Adolfo Suárez Madrid–Barajas Airport",
    arrivalAirport: "Amsterdam Airport Schiphol",
    departureDate: "2023-12-01",
    departureTime: "01:30",
    arrivalTime: "03:45",
    price: 130,
    currency: "€",
    departureAirportId: 1,
    arrivalAirportId: 2,
    departureCountry: "Spain",
    arrivalCountry: "Netherlands",
  },{
    id: 51,
    flightNumber: "TK-1001",
    departureAirport: "Amsterdam Airport Schiphol",
    arrivalAirport: "Adolfo Suárez Madrid–Barajas Airport",
    departureDate: "2023-12-02",
    departureTime: "08:00",
    arrivalTime: "12:05",
    price: 210,
    currency: "€",
    departureAirportId: 2,
    arrivalAirportId: 1,
    departureCountry: "Netherlands",
    arrivalCountry: "Spain"
  },
  {
    id: 52,
    flightNumber: "TK-1002",
    departureAirport: "Amsterdam Airport Schiphol",
    arrivalAirport: "Adolfo Suárez Madrid–Barajas Airport",
    departureDate: "2023-12-02",
    departureTime: "09:15",
    arrivalTime: "13:20",
    price: 220,
    currency: "€",
    departureAirportId: 2,
    arrivalAirportId: 1,
    departureCountry: "Netherlands",
    arrivalCountry: "Spain"
  },
  {
    id: 53,
    flightNumber: "TK-1003",
    departureAirport: "Amsterdam Airport Schiphol",
    arrivalAirport: "Adolfo Suárez Madrid–Barajas Airport",
    departureDate: "2023-12-02",
    departureTime: "10:30",
    arrivalTime: "14:35",
    price: 200,
    currency: "€",
    departureAirportId: 2,
    arrivalAirportId: 1,
    departureCountry: "Netherlands",
    arrivalCountry: "Spain"
  },
  {
    id: 54,
    flightNumber: "TK-1004",
    departureAirport: "Amsterdam Airport Schiphol",
    arrivalAirport: "Adolfo Suárez Madrid–Barajas Airport",
    departureDate: "2023-12-02",
    departureTime: "11:45",
    arrivalTime: "15:50",
    price: 230,
    currency: "€",
    departureAirportId: 2,
    arrivalAirportId: 1,
    departureCountry: "Netherlands",
    arrivalCountry: "Spain"
  },
  {
    id: 55,
    flightNumber: "TK-1005",
    departureAirport: "Amsterdam Airport Schiphol",
    arrivalAirport: "Adolfo Suárez Madrid–Barajas Airport",
    departureDate: "2023-12-02",
    departureTime: "13:00",
    arrivalTime: "17:05",
    price: 240,
    currency: "€",
    departureAirportId: 2,
    arrivalAirportId: 1,
    departureCountry: "Netherlands",
    arrivalCountry: "Spain"
  },
  {
    id: 56,
    flightNumber: "TK-1006",
    departureAirport: "Amsterdam Airport Schiphol",
    arrivalAirport: "Adolfo Suárez Madrid–Barajas Airport",
    departureDate: "2023-12-02",
    departureTime: "14:15",
    arrivalTime: "18:20",
    price: 210,
    currency: "€",
    departureAirportId: 2,
    arrivalAirportId: 1,
    departureCountry: "Netherlands",
    arrivalCountry: "Spain"
  },
  {
    id: 57,
    flightNumber: "TK-1007",
    departureAirport: "Amsterdam Airport Schiphol",
    arrivalAirport: "Adolfo Suárez Madrid–Barajas Airport",
    departureDate: "2023-12-02",
    departureTime: "15:30",
    arrivalTime: "19:35",
    price: 220,
    currency: "€",
    departureAirportId: 2,
    arrivalAirportId: 1,
    departureCountry: "Netherlands",
    arrivalCountry: "Spain"
  },
  
];

export default tickets;
