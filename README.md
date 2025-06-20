# To-do List
<div align="center">
  <img src="/src/assets/imgs/dark/video_dark_theme.gif"/>
</div>
<br/><br/>

## 🖥 화면 구성
<details>
  <summary><h3 style="display:inline; margin-left:4px">홈 화면</h3></summary>
  
  <p align="center">
    <img src="/src/assets/imgs/light/img_todo_light.png" width="500"/>
    <img src="/src/assets/imgs/dark/img_todo_dark.png" width="500"/>
  </p>
</details>

<details>
  <summary><h3 style="display:inline; margin-left:4px">할 일 목록 화면</h3></summary>
  
  <p align="center">
    <img src="/src/assets/imgs/light/img_todo_light_active.png" width="500"/>
    <img src="/src/assets/imgs/dark/img_todo_dark_active.png" width="500"/>
  </p>
</details>

<details>
  <summary><h3 style="display:inline; margin-left:4px">완료 목록 화면</h3></summary>
  
  <p align="center">
    <img src="/src/assets/imgs/light/img_todo_light_completed.png" width="500"/>
    <img src="/src/assets/imgs/dark/img_todo_dark_completed.png" width="500"/>
  </p>
</details>
<br/><br/>

## 💡 주요 기능 및 구현
<details>
  <summary><h3 style="display:inline; margin-left:4px">1️⃣ 추가</h3></summary>

  - **아이템 추가:** 텍스트 입력 후 'Enter'를 누르거나 'Add' 버튼을 클릭하면 아이템을 하나씩 추가할 수 있습니다.
  
    <img src="/src/assets/imgs/light/video_light_add.gif"/>
</details>

<details>
  <summary><h3 style="display:inline; margin-left:4px">2️⃣ 삭제</h3></summary>

  - **아이템 삭제:** 리스트 오른쪽에 있는 휴지통을 클릭하여 아이템을 하나씩 삭제할 수 있습니다.

    <img src="/src/assets/imgs/light/video_light_remove.gif"/>
</details>

<details>
  <summary><h3 style="display:inline; margin-left:4px">3️⃣ 완료</h3></summary>

  - **완료된 아이템 체크:** 리스트 왼쪽에 있는 체크박스를 클릭하면 스타일과 남은 할 일의 개수가 변경됩니다.

    <img src="/src/assets/imgs/light/video_light_completed.gif"/>
</details>
<br/>

## 🛠 기술 스택
#### 🕹 프론트엔드
<div>
  <img src="https://img.shields.io/badge/React-%2320232a.svg?style=flat-square&logo=react&logoColor=%2361DAFB" />&nbsp;
  <img src="https://img.shields.io/badge/Context_API-000000?style=flat-square&logoColor=white" />&nbsp;
  <img src="https://img.shields.io/badge/CSS_Modules-hotpink.svg?style=flat-square&logoColor=white" />&nbsp;
  <img src="https://img.shields.io/badge/Vite-%23646CFF.svg?style=flat-square&logo=vite&logoColor=white" />&nbsp;
</div>

#### 🚀 배포 도구
<img src="https://img.shields.io/badge/Netlify-%23000000.svg?style=flat-square&logo=netlify&logoColor=#00C7B7">
<br/>

## 🧩 폴더 구조
```
📦src
 ┣ 📂assets
 ┃ ┣ 📂imgs
 ┃ ┃ ┣ 📂dark
 ┃ ┃ ┗ 📂light
 ┃ ┗ 📜react.svg
 ┣ 📂components
 ┃ ┣ 📜AddTodo.jsx           // 새로운 할 일 항목 추가 입력창
 ┃ ┣ 📜AddTodo.module.css
 ┃ ┣ 📜Header.jsx            // 상단 탭 필터링
 ┃ ┣ 📜Header.module.css     
 ┃ ┣ 📜Todo.jsx              // 할 일 리스트 렌더링
 ┃ ┣ 📜Todo.module.css
 ┃ ┣ 📜TodoList.jsx          // 개별 항목들 이벤트 핸들링
 ┃ ┗ 📜TodoList.module.css
 ┣ 📂context
 ┃ ┗ 📜DarkModeContext.jsx   // 라이트, 다크 모드 핸들링
 ┣ 📜App.css
 ┣ 📜App.jsx
 ┣ 📜index.css
 ┗ 📜main.jsx
```
<br/>

## 🎯 실행 방법

- **Node.js 18 이상 권장**

```bash
# 패키지 설치
npm install   # 또는 npm i

# 개발 서버 실행
npm run dev
```
<br/>

## 📍 홈페이지 주소
https://preeminent-swan-ca382f.netlify.app/
