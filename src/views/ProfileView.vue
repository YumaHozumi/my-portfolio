<template>
    <Header></Header>
    
    <section id="profile" style="padding-top:80px;">
        <div class="container py-4 text-center">
            <p class="h1">プロフィール</p>
            <div class="row align-items-center g-4">
                <div class="col-lg-4 mx-auto">
                    <h4>学業面</h4>
                    <h4 class="border-bottom my-3"></h4>
                    <ul style="text-align: left">
                        <li>近畿大学情報学科情報システムコース4回生</li>
                        <li>電子計算機研究会 元渉外広報部長</li>
                        <li>3,4回生で特別特待生を獲得し、学費全額免除</li>
                        <li>大学院進学予定(エレクトロニクス系工学専攻・コンピュータビジョン研究室)</li>
                    </ul>
                    
                    <h4 class="pt-3">技術面</h4>
                    <h4 class="border-bottom my-3"></h4>
                    <ul style="text-align: left">
                        <li>主要な言語：Java、Python</li>
                        <li>OS環境：Windows、Mac、Linux</li>
                        <li>Web App開発が好き。</li>
                        <li>主な使用フレームワーク：Vue, Fast API</li>
                        <li>Raspberry pi 4を2台所有</li>
                        <li>Dockerをサーバー上で使用</li>
                        <li>基本情報技術者取得(2021年7月)</li>
                        <li>応用情報技術者取得(2022年12月)</li>
                        
                    </ul>
                </div>
                
                <div class="col-lg-4 mx-auto">
                    <h4 class="pt-3">趣味</h4>
                    <h4 class="border-bottom my-3"></h4>
                    <p>最近のマイブームはマーダーミステリーという推理ゲーム。
                    事件が起こったという状況の中、物語の登場人物になりきって他のプレイヤーと話し合いなどで事件の真相を探るテーブルトーク型
                    のゲームです。推理力、状況整理能力、コミュニケーション力をいかに活かせるかが効いてくるゲームで非常に面白く、
                    布教を試みています。また、音楽鑑賞が好きです。特にYOASOBIやAdoさんを好んで聴いています。</p>
                    
                    <img src="../assets/images/raspi.jpg" class="img-fluid">
                </div>
            </div>
        </div>
    </section>

    <Footer class="fixed-bottom"></Footer>
  </template>
  
  <script>
  import Header from '@/components/Header.vue';
  import Footer from '@/components/Footer.vue';
  
  export default {
    name: 'HomeView',
    components: {
      Header,
      Footer,
    }
  }
  </script>