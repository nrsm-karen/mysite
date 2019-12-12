// gulpプラグインの読み込み
var gulp = require("gulp");
// Sassをコンパイルするプラグインの読み込み
var sass = require("gulp-sass");

// style.scssをコンパイルするタスク↓
gulp.task("default", function () {
    
   // ★ scssフォルダの.scssファイルを監視
    return gulp.watch("scss/*.scss", function() {
        // style.scssの更新があった場合の処理↓
        // style.scssファイルを取得
        return (
            gulp
            .src("scss/*.scss")
            // Sassのコンパイルを実行
            .pipe(sass())
            // cssフォルダー以下に保存
            .pipe(gulp.dest("css"))
            );
        });
    });
    
    

