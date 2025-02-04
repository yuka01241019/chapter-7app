import React from "react"; 
import { Header } from "./components/Header";
import { Routes, Route } from "react-router-dom";
import { PageDetail } from "./pages/PageDetail";
import { Posts } from "./Posts"; 
import { ContactForm } from "./pages/ContactForm"; 

const App : React.FC= () => {
  return (
    <div>
      <Header />
      {/* ルーティング設定 */}
      <Routes>
        {/* 記事一覧 */}
        <Route path="/" element={<Posts />} />
        {/* 記事詳細 */}
        <Route path="/posts/:id" element={<PageDetail />} />
        {/* お問い合わせ */}
        <Route path="/contact" element={<ContactForm />} />
      </Routes>
    </div>
  );
};

export default App;
