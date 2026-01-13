# ProteinIQ

ProteinIQ is a simple, client-side web application that calculates an individual’s recommended daily protein intake based on personal attributes such as gender, height, weight, activity level, and training experience.

The project is designed to help users make informed dietary decisions, especially athletes, fitness enthusiasts, and individuals exploring plant-based or alternative protein sources.

---

## 🚀 Features

- Calculates daily protein needs in grams
- Considers:
  - Gender
  - Height (cm)
  - Weight (kg)
  - Activity level
  - Training level
- Fully client-side (no backend, no data storage)
- Clean and simple UI
- Privacy-friendly: **no user data is saved**

---

## 🧠 How It Works

ProteinIQ estimates protein intake using weight-based multipliers:

### Base Protein Intake (g/kg bodyweight)
| Activity Level | Multiplier |
|---------------|------------|
| Sedentary | 0.8 |
| Lightly Active | 1.2 |
| Moderately Active | 1.6 |
| Very Active | 2.2 |
| Extra Active | 2.5 |

### Training Level Adjustment
| Training Level | Increase |
|---------------|----------|
| Beginner | +10% |
| Intermediate | +20% |
| Advanced | +30% |

The final value is rounded and displayed to the user.

## 🛠️ Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript
- No frameworks or external libraries

---

## ▶️ How to Run

1. Download or clone the repository
2. Open `index.html` in any modern web browser
3. Fill out the form honestly
4. Click **Calculate Protein Needs**
5. View your recommended daily protein intake

**OR YOU CAN VISIT proteiniq.netlify.app**

No installation or setup required.

---

## 📌 Notes

- Height must be entered in **centimeters**
- Weight must be entered in **kilograms**
- Conversion tools are linked directly in the form
- Results are estimates and should not replace professional medical advice

---
 

Thank you for using **ProteinIQ**!

---
