<script setup>
import ProductShowcase from './ProductShowcase.vue';
</script>

<template>
    <section class="bg-black text-white pb-5" id="home">
        <div class="container py-3">
            <div class="row align-items-center g-4 fst-italic">
            <!-- 左側に -->
                <div class="col-md-7">
                    <h1>Welcome to Hozumi's Portfolio</h1>
                    <p>No Programming, No Life.</p>				
                </div>
            <!-- 右 -->
                <div class="col-md-5 text-center">
                <!-- img-fluid : 画像をレスポンシブルに -->
                    <img src="../assets/images/undraw_programming_re_kg9v.svg" class="img-fluid" alt="Content team">
                </div>
            </div>
        </div>
    </section>
    
    
<!-- About -->
    <section class="bg-black about-section" id="about" style="padding-top:80px">
        <div class="contaier pb-3 text-center">
            <div class="row g-4">
                <div class="col-lg-4 mx-auto">
                    <h2 class="text-white">Who are you?</h2>
                    <p class="text-white-50">近畿大学大学院 総合理工学研究科 修士1年のほずみんです。最近はPythonとVueばっかり触っています。Web Appを作る際は
                    主にPythonのFast APIやVueを
                    利用しています。密かに
                    <a href="https://www.bodoge-intl.com/list/insapo/murder/" target="_blank" class="text-decoration-none link-secondary">マダミス</a>
                    と呼ばれるトーク型の推理ゲームにはまっています。</p>				
                </div>
            </div>
        </div>
    </section>
    
<!-- Skill -->
    <section id="skill" style="padding-top:80px">
        <div class="container py-4 text-center">
            <div class="row align-items-center g-4">
                <div class="col-lg-7 mx-auto">
                    <p class="h1">スキル</p>
                    <p>主にVueとPythonを使っています。VueやFast APIでWeb App開発をしています。愛用しているPCはWindowsとMacの二刀流です。
                    Dockerの素晴らしさに感銘を受け色々な使い方を模索しています。大学ではコンピュータビジョン研究室に所属しており、人物の行動認識の研究をしています。
                    <br>【資格】基本情報技術者、応用情報技術者、TOEIC 公開テスト655点</p>
                </div>
            </div>
        </div>
    </section>
<!-- Works -->
    <section class="py-4" id="works" style="padding-top:8px">
        <div class="container text-center py-4">
            <div class="row pb-3">
                <div class="col">
                    <h1>成果物</h1>
                </div>
            </div>

        <!-- 成果物1つ目 -->
        <ProductShowcase
            title="Shelfmate"
            description="所持している本を管理できるWebアプリ。【使用技術】(フロントエンド)Vue.js、(バックエンド)Golang、 (その他)Firebase、Google Books API、国立国会図書館API"
            githubLink="https://github.com/YumaHozumi/Shelfmate"
            appLink="https://shelfmate.hzmintech.com/"
            :imageRight="false"
        >
            <img src="../assets/images/bookshelf-view.png" class="img-fluid" loading="lazy">
        </ProductShowcase>

        <ProductShowcase
            title="技術記事ピックアップbot"
            description="Qiitaの記事を毎日，AIによる要約つきで自動でピックアップしてくれるbot。【使用技術】GAS (その他) Qiita API、Slack API, Gemini API"
            :imageRight="true"
        >
        <img src="../assets/images/gas_slack.png" class="img-fluid" loading="lazy">
        </ProductShowcase>
            
        <!-- 成果物2つ目 -->
        <ProductShowcase
            title="PdfMerge App"
            description="pdf結合ができるWebアプリ。jpegやpngをそのまま投入しても一括でpdfとして結合してくれるところがポイント。【使用技術】(フロントエンド)Vue.js、 Vuetify、(バックエンド)Python、FastAPI"
            githubLink="https://github.com/YumaHozumi/pdfMergeApp"
            appLink=""
            :imageRight="false"
        >
            <img src="../assets/images/sample-merge.png" class="img-fluid" loading="lazy">
        </ProductShowcase>

        <!-- 成果物3つ目 -->
        <ProductShowcase
            title="Portfolio"
            description="今閲覧しているこのページ。【使用技術】Vue.js、Bootstrap"
            githubLink=""
            appLink=""
            :imageRight="true"
        >
            <img src="../assets/images/portfolio.png" class="img-fluid" loading="lazy">
        </ProductShowcase>

        <!-- 成果物4つ目 -->
        <ProductShowcase
            title="Wizard Jump"
            description="部のハッカソンというイベントにて開発したゲーム。いわゆる鬼畜ゲーを意識しており、開発者もクリアするのに悪戦苦闘した。共同開発で、プレイヤーのコントロール面全般を担当。<br>【ゲームエンジン】Unity 【開発言語】C# 【開発期間】3週間 【余談】近畿大学の<a href='https://kindaipicks.com/article/002458' target='_blank' class='text-decoration-none link-primary'>公式HPの記事</a>で部の紹介がされた際になぜか当ゲームがインタビュアーに紹介された。"
            githubLink=""
            appLink=""
            :imageRight="false"
        >
            <img src="../assets/images/hackathonComplete_Trim.gif" class="img-fluid" loading="lazy">
        </ProductShowcase>

        <!-- 成果物5つ目 -->
        <ProductShowcase
            title="技術書SNS"
            description="【概要】大学の授業で、他の人と共同開発したWebアプリケーションです。おすすめの技術書を他の人とシェアするといったコンセプトになっています"
            githubLink="https://github.com/Sane21/Syspro"
            appLink=""
            imageSrc="../assets/images/B17_Moment.78bd966d.jpg"
            :imageRight="true"
        >
            <img src="../assets/images/B17_Moment.78bd966d.jpg" class="img-fluid" loading="lazy">
        </ProductShowcase>

        <!-- 成果物6つ目 -->
        <ProductShowcase
            title="Todo App"
            description="ユーザ毎にタスクを管理することができるWebアプリ。<br>【使用技術】Java、Spring boot、Bootstrap、MyBatis"
            githubLink=""
            appLink="https://mywebapp.hzmintech.com"
            imageSrc="../assets/images/todoapp.png"
            :imageRight="false"
        >
            <img src="../assets/images/todoapp.png" class="img-fluid" loading="lazy">
        </ProductShowcase>
            
            <p class="my-4">随時成果物追加予定</p>
        </div>
    </section>

    <section class="bg-black">
		<div class="container text-center py-4">
			
			<div class="justify-content-center">
				<a href="https://github.com/YumaHozumi" class="mx-2 link-secondary" target="_blank">
					<i class="bi bi-github"></i>
				</a>				
				
				<a href="https://qiita.com/YumaHozumi" class="mx-2 link-secondary" target="_blank">
					<i class="bi bi-qiita">
						<b>Q</b>
					</i>
				</a>
			</div>
			
		</div>
	</section>
</template>