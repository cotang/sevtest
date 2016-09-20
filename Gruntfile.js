module.exports = function(grunt) {

  // подключаем плагин load-grunt-tasks, чтобы не перечислять все прочие плагины
  require('load-grunt-tasks')(grunt);

  // описываем задачи, которые планируем использовать (их запуск - см. низ этого файла)
  grunt.initConfig({

    // компилируем препроцессор
    less: {
      style: {
        options: {
          compress: false,
          yuicompress: false,
          optimization: 2,
        },
        files: {
          // в какой файл, из какого файла
          'build/css/style.css': ['src/less/style.less']
        },
      }
    },

    // обрабатываем postcss-ом (там только autoprefixer, на самом деле)
    postcss: {
      options: {
        processors: [
          // автопрефиксер и его настройки
          require("autoprefixer")({browsers: "last 5 versions"})
        ]
      },
      style: {
        // какие файлы обрабатывать (все .css в указанной папке)
        src: "build/css/*.css"
      }
    },

    // объединяем медиавыражения
    cmq: {
      style: {
        files: {
          // в какой файл, из какого файла (тут это один и тот же файл)
          'build/css/style.css': ['build/css/style.css']
        }
      }
    },

    // минимизируем стилевые файлы
    cssmin: {
      style: {
        options: {
          keepSpecialComments: 0
        },
        files: [{
          expand: true,
          // в какой папке брать исходники
          cwd: 'build/css',
          // какие файлы (ЛЮБОЕ_ИМЯ.css, но не ЛЮБОЕ_ИМЯ.min.css)
          src: ['*.css', '!*.min.css'],
          // в какую папку писать результат
          dest: 'build/css',
          // какое расширение дать результатам обработки
          ext: '.min.css'
        }]
      }
    },

    // склеиваем файлы js
    concat: {
      start: {
        src: [
          'src/js/slick.js' ,         
          'src/js/my-script.js'
        ],
        dest: 'build/js/script.js'
      }
    },

    // минимизируем файлы js
    uglify: {
      start: {
        files: {
          'build/js/script.min.js': ['build/js/script.js']
        }
      }
    },
    imagemin: {
      build: {
        options: {
          optimizationLevel: 3
        },
        files: [{
          expand: true,
          src: ['img/sprite_svg/*.svg']
        }]
      }
    },

    svgstore: {
      options: {
        includeTitleElement: false,
        svg: {
          style: 'display:none',
        },
        cleanup: [
          'fill',
        ],
      },
      default : {
        files: {
          'src/img/sprite.svg': ['src/img/sprite_svg/*.svg'],
        },
      },
    },

    // процесс копирования
    copy: {
      // копируем картинки
      img: {
        expand: true,
        // откуда
        cwd: 'src/img/',
        // какие файлы (все картинки (см. расширения) из корня указанной папки и всех подпапок)
        src: ['**/*.{png,jpg,gif,svg}'],
        // куда
        dest: 'build/img/',
      },
    },

    // обрабатываем разметку (инклуды, простейший шаблонизатор)
    includereplace: {
      html: {
        expand: true,
        // откуда брать исходные файлы
        cwd: 'src/',
        // какие файлы обрабатывать
        src: '*.html',
        // куда писать результат обработки
        dest: 'build/',
      }
    },

    // публикация на GitHub Pages (будет доступен в сети по адресу http://ВАШ-НИКНЕЙМ.github.io/ВАШ-РЕПОЗИТОРИЙ/)
    'gh-pages': {
      options: {
        // какую папку считать результатом работы
        base: 'build'
      },
      src: '**/*'
    },

    // слежение за файлами
    watch: {
      // перезагрузка? да, детка!
      livereload: {
        options: { livereload: true },
        files: ['build/**/*'],
      },
      // следить за стилями
      style: {
        // за фактом с сохранения каких файлов следить
        files: ['src/less/**/*.less'],
        // какую задачу при этом запускать (сами задачи — см. ниже)
        tasks: ['style'],
        options: {
          spawn: false,
        },
      },
      // следить за скриптами
      scripts: {
        // за фактом с сохранения каких файлов следить
        files: ['src/js/**/*.*'],
        // какую задачу при этом запускать (сами задачи — см. ниже)
        tasks: ['js'],
        options: {
          spawn: false,
        },
      },      
      // следить за картинками
      images: {
        // за фактом с сохранения каких файлов следить
        files: ['src/img/**/*.{png,jpg,gif,svg}'],
        // какую задачу при этом запускать (сами задачи — см. ниже)
        tasks: ['img'],
        options: {
          spawn: false
        },
      },
      // следить за файлами разметки
      html: {
        // за фактом с сохранения каких файлов следить
        files: ['src/*.html', 'src/_html_inc/*.html'],
        // какую задачу при этом запускать (указан сам процесс)
        tasks: ['includereplace:html'],
        options: {
          spawn: false
        },
      },
    },

    // локальный сервер, автообновление
    browserSync: {
      dev: {
        bsFiles: {
          // за изменением каких файлов следить для автообновления открытой в браузере страницы с локального сервера
          src : [
            'build/css/*.css',
            'build/js/*.js',
            'build/img/*.{png,jpg,gif,svg}',
            'build/*.html',
          ]
        },
        options: {
          watchTask: true,
          server: {
            // корень сервера
            baseDir: "build/",
          },
          // синхронизация между браузерами и устройствами (если одна и та же страница открыта в нескольких браузерах)
          ghostMode: {
            clicks: true,
            forms: true,
            scroll: false
          }
        }
      }
    }

  });



  // задача по умолчанию
  grunt.registerTask('default', [
    'style',
    'img',
    'includereplace:html',
    'js',
    'browserSync',
    'watch'
  ]);

  // только компиляция стилей
  grunt.registerTask('style', [
    'less',
    'postcss',
    'cmq',
    'cssmin',
  ]);

  // только обработка скриптов
  grunt.registerTask('js', [
    'concat',
    'uglify',     
  ]);  

  // только обработка картинок
  grunt.registerTask('img', [
    'imagemin',
    'svgstore',    
    'copy:img',    
  ]);

  // сборка
  grunt.registerTask('build', [
    'style',
    'img',
    'includereplace:html',
    'gh-pages',
  ]);

};