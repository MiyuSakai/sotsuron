var repo_site ="https://MiyuSakai.github.io/sotsuron/"


/*ID(日付時刻_８桁の乱数)の設定*/
// 乱数
var l = 8;
var c = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
var cl = c.length;
var r_num = "";
for(var i=0; i<l; i++){
  r_num += c[Math.floor(Math.random()*cl)];
}
// 日付時刻
var time_date= new Date();
var year = time_date.getFullYear();
var month = time_date.getMonth()+1;
var date = time_date.getDate();
var hour = time_date.getHours();
var minute = time_date.getMinutes();
var second = time_date.getSeconds();
// ID
var exp_id = year +'_'+ month +'_'+ date +'_'+ hour +'_'+ minute +'_'+ second +'_' + r_num;


jsPsych.data.addProperties({
  subject: r_num
});

var random = Math.floor( Math.random() * 2 )

jsPsych.data.addProperties({
  condition: random
});



var pc_check = {
  type: "html-keyboard-response",
  stimulus:"<p style = 'font-size:1.5em; text-align: center'>パソコンでアクセスしているかの確認を行います。スペースキーを押して次へ進んでください</p>",
  choices: ["space"]
};





var nameget_q1 = {
  type: "survey-text",
  questions: [
        {prompt: "名字（姓）を入力してください（例：田中 太郎さんなら、田中）"+" <p>次に行う実験でどうしても必要なため記入をお願いしております。</p>"+" <p>ここで収集した名前については、次の課題でのみ使用し、分析には使用致しません。</p>"+"<p>プライバシー保護には十分配慮致します。</p>", name: 'name_up', required:"True"}
      ],
  button_label: "次へ",
  on_finish: function(data){
    nameup = JSON.parse(data.responses).name_up;
    jsPsych.data.addProperties({name01: nameup});
  }
};

var nameget_q2 = {
  type: "survey-text",
  questions: [
        {prompt: "<p>名前（名）を入力してください（例：田中 太郎さんなら、太郎）</p>"+" <p>ここで収集した名前については、次の課題でのみ使用し、分析には使用致しません。</p>"+"<p>プライバシー保護には十分配慮致します。</p>", name: 'name_down', required:"True"}
      ],
  button_label: "次へ",
  on_finish: function(data){
    namedo = JSON.parse(data.responses).name_down;
    jsPsych.data.addProperties({name02: namedo});
  }
};


//教示文を読んで入力してもらう
var iat_instruction_test = {
  type: "html-keyboard-response",
  stimulus:"<img src='"+ repo_site +"Picture03.png' width='60%'>"+"<p style = 'font-size:1.5em; text-align: center'>練習です</p>"+"<p>キーボードを利用した単語の分類課題を行います。</p>"+"<p>画面中央に表示される単語が、左上の<b>「よい」</b>または<b>「虫」</b>のカテゴリーに当てはまると思ったら<b>「E」</b>キーを、<br>右上の<b>「わるい」</b>のカテゴリーに当てはまると思ったら<b>「I」</b>キーを押してください。</p>"+ "<p><b>左右のカテゴリーは固定で、中央の単語が変わります。</b></p>"+"<p>間違えるとX（バツ）が中央に表示されるので、押したキーと反対のキーを押してください</br><b>スペースキー</b>を押すと開始します。</p>"+"<p style = 'font-size: 1.5em;'>単語が表示されたら、なるべく早く回答してください。</p>",
  choices: ["space"]
};

var iat_instruction = {
  type: "html-keyboard-response",
  stimulus:"<img src='"+ repo_site +"Picture05.png' width='60%'>"+"<p style = 'font-size:1.5em; text-align: center'>本番です</p>"+"<p style = 'font-size: 2em;'><b>左右のカテゴリーが変わっています</b></p>"+"<p>キーボードを利用した単語の分類課題を行います。</p>"+"<p>画面中央に表示される単語が、左上の<b>「成功」</b>または<b>「自己」</b>のカテゴリーに当てはまると思ったら<b>「E」</b>キーを、<br>右上の<b>「失敗」</b>のカテゴリーに当てはまると思ったら<b>「I」</b>キーを押してください。</p>"+ "<p><b>左右のカテゴリーは固定で、中央の単語が変わります。</b></p>"+"<p>間違えるとX（バツ）が中央に表示されるので、押したキーと反対のキーを押してください</br><b>スペースキー</b>を押すと開始します。</p>"+"<p style = 'font-size: 1.5em;'>単語が表示されたら、なるべく早く回答してください。</p>",
  choices: ["space"]
};

var iat_brakegood = {
  type: "html-keyboard-response",
  stimulus:"<img src='"+ repo_site +"Picture05.png' width='60%'>"+"<p style = 'font-size:1.5em; text-align: center'>休憩です</p>"+"<p>キーボードを利用した単語の分類課題を行います。</p>"+"<p>画面中央に表示される単語が、左上の<b>「成功」</b>または<b>「自己」</b>のカテゴリーに当てはまると思ったら<b>「E」</b>キーを、<br>右上の「失敗」のカテゴリーに当てはまると思ったら<b>「I」</b>キーを押してください。</p>"+ "<p><b>左右のカテゴリーは固定で、中央の単語が変わります。</b></p>"+"<p>間違えるとX（バツ）が中央に表示されるので、押したキーと反対のキーを押してください</br><b>スペースキー</b>を押すと開始します。</p>"+"<p style = 'font-size: 1.5em;'>単語が表示されたら、なるべく早く回答してください。</p>",
  choices: ["space"]
};


var iat_brakechange = {
  type: "html-keyboard-response",
  stimulus:"<img src='"+ repo_site +"Picture06.png' width='60%'>"+"<p style = 'font-size:1.5em; text-align: center'>休憩です</p>"+"<p>キーボードを利用した単語の分類課題を行います。</p>"+"<p style = 'font-size: 2em;'><b>左右のカテゴリーが変わっています</b></p>"+"<p>画面中央に表示される単語が、左上の<b>「成功」</b>カテゴリーに当てはまると思ったら<b>「E」</b>キーを、<br>右上の<b>「失敗」</b>又は<b>「自己」</b>のカテゴリーに当てはまると思ったら<b>「I」</b>キーを押してください。</p>"+ "<p><b>左右のカテゴリーは固定で、中央の単語が変わります。</b></p>"+"<p>間違えるとX（バツ）が中央に表示されるので、押したキーと反対のキーを押してください</br><b>スペースキー</b>を押すと開始します。</p>"+"<p style = 'font-size: 1.5em;'>単語が表示されたら、なるべく早く回答してください。</p>",
  choices: ["space"]
};

var iat_brakebad = {
  type: "html-keyboard-response",
  stimulus:"<img src='"+ repo_site +"Picture06.png' width='60%'>"+"<p style = 'font-size:1.5em; text-align: center'>休憩です</p>"+"<p>キーボードを利用した単語の分類課題を行います。</p>"+"<p>画面中央に表示される単語が、左上の<b>「成功」</b>カテゴリーに当てはまると思ったら<b>「E」</b>キーを、<br>右上の<b>「失敗」</b>または<b>「自己」</b>のカテゴリーに当てはまると思ったら<b>「I」</b>キーを押してください。</p>"+ "<p><b>左右のカテゴリーは固定で、中央の単語が変わります。</b></p>"+"<p>間違えるとX（バツ）が中央に表示されるので、押したキーと反対のキーを押してください</br><b>スペースキー</b>を押すと開始します。</p>"+"<p style = 'font-size: 1.5em;'>単語が表示されたら、なるべく早く回答してください。</p>",
  choices: ["space"]
};


//練習試行
var trial_test01 = {
  timeline:[
    {
      type: 'iat-html',
      stimulus: jsPsych.timelineVariable('stimulus'),
      stim_key_association: jsPsych.timelineVariable('stim_key_association'),
      html_when_wrong: '<span style="color: red; font-size: 80px">X</span>',
      bottom_instructions: '<p>間違えるとバツが表示されます。バツが表示されたら反対のキーを押してください</p>',
      force_correct_key_press: true,
      display_feedback: true,
      left_category_key: 'E',
      right_category_key: 'I',
      left_category_label: ["よい</br></br>虫"],
      right_category_label: ["わるい"],
      response_ends_trial: true
    }
    ],  
  //IATで使う刺激
  timeline_variables: [
    /* 快語 */
    {stimulus: "すてきな", stim_key_association: "left"},
    {stimulus: "カブトムシ", stim_key_association: "left"},
    {stimulus: "ひどい", stim_key_association: "right"},
    {stimulus: "卑しい", stim_key_association: "right"},
    {stimulus: "バッタ", stim_key_association: "left"},
    {stimulus: "汚い", stim_key_association: "right"},
    {stimulus: "愚かな", stim_key_association: "right"},
    {stimulus: "優秀な", stim_key_association: "left"},
    {stimulus: "クワガタ", stim_key_association: "left"},
    {stimulus: "素晴らしい", stim_key_association: "left"},
    {stimulus: "美しい", stim_key_association: "left"},
    {stimulus: "ハチ", stim_key_association: "left"}
    ],
  repetitions: 1
};


// SC-IAT：研究1バージョン
//Block1:self+possible vs impossible
var trial01_prac01 = {
  timeline:[
    {
      type: 'iat-html',
      stimulus: jsPsych.timelineVariable('stimulus'),
      stim_key_association: jsPsych.timelineVariable('stim_key_association'),
      html_when_wrong: '<span style="color: red; font-size: 80px">X</span>',
      bottom_instructions: '<p>間違えるとバツが表示されます。バツが表示されたら反対のキーを押してください</p>',
      force_correct_key_press: true,
      display_feedback: true,
      left_category_key: 'E',
      right_category_key: 'I',
      left_category_label: ["成功</br></br>自己"],
      right_category_label: ["失敗"],
      response_ends_trial: true
    }
    ],  
  //IATで使う刺激
  timeline_variables: [
    {stimulus: "不可能", stim_key_association: "right"},
    {stimulus: "無理", stim_key_association: "right"},
    {stimulus: "自分", stim_key_association: "left"},
    {stimulus: "やれない", stim_key_association: "right"},
    {stimulus: function(){
      var named = jsPsych.data.get().last(1).values()[0].name02;
      return named;
    }, stim_key_association: "left"},
    {stimulus: "不可能", stim_key_association: "right"},
    {stimulus: "可能", stim_key_association: "left"},
    {stimulus: "達成", stim_key_association: "left"},
    {stimulus: "できる", stim_key_association: "left"},
    {stimulus: "自分", stim_key_association: "left"},
    {stimulus: "できない", stim_key_association: "right"},
    {stimulus: "やれる", stim_key_association: "left"},
    {stimulus: function(){
      var named = jsPsych.data.get().last(1).values()[0].name02;
      return named;
    }, stim_key_association: "left"},
    {stimulus: "達成", stim_key_association: "left"},
    {stimulus: "やれない", stim_key_association: "right"},
    {stimulus: function(){
      var nameu = jsPsych.data.get().last(1).values()[0].name01;
      return nameu;
    }, stim_key_association: "left"},
    {stimulus: "やれない", stim_key_association: "right"},
  
    {stimulus: "可能", stim_key_association: "left"},
    {stimulus: "不可能", stim_key_association: "right"},
    {stimulus: function(){
      var nameu = jsPsych.data.get().last(1).values()[0].name01;
      return nameu;
    }, stim_key_association: "left"},
    {stimulus: "できない", stim_key_association: "right"},
    {stimulus: "私", stim_key_association: "left"},
    {stimulus: "やれる", stim_key_association: "left"},
    {stimulus: "無理", stim_key_association: "right"},
    {stimulus: "私", stim_key_association: "left"},
    {stimulus: "できる", stim_key_association: "left"},
    {stimulus: "できない", stim_key_association: "right"},
    {stimulus: "無理", stim_key_association: "right"}
    ],
  repetitions: 1
};


//Block3:self+bad
var trial01_prac02 = {
  timeline:[
    {
      type: 'iat-html',
      stimulus: jsPsych.timelineVariable('stimulus'),
      stim_key_association: jsPsych.timelineVariable('stim_key_association'),
      html_when_wrong: '<span style="color: red; font-size: 80px">X</span>',
      bottom_instructions: '<p>間違えるとバツが表示されます。バツが表示されたら反対のキーを押してください</p>',
      force_correct_key_press: true,
      display_feedback: true,
      left_category_key: 'E',
      right_category_key: 'I',
      left_category_label: ["成功"],
      right_category_label: ["失敗</br></br>自己"],
      response_ends_trial: true
    }
    ],  
  //IATで使う刺激
  timeline_variables: [
  {stimulus: function(){
      var nameu = jsPsych.data.get().last(1).values()[0].name01;
      return nameu;
    }, stim_key_association: "right"},
  {stimulus: "私", stim_key_association: "right"},
  {stimulus: "できる", stim_key_association: "left"},
  {stimulus: "不可能", stim_key_association: "right"},
  {stimulus: "やれない", stim_key_association: "right"},
  {stimulus: "できない", stim_key_association: "right"},
  {stimulus: "自分", stim_key_association: "right"},
  {stimulus: "できる", stim_key_association: "left"},
  {stimulus: "無理", stim_key_association: "right"},
  {stimulus: "可能", stim_key_association: "left"},
  {stimulus: "やれない", stim_key_association: "right"},
  {stimulus: "不可能", stim_key_association: "right"},
  {stimulus: "達成", stim_key_association: "left"},
  {stimulus: "できない", stim_key_association: "right"},
  {stimulus: "達成", stim_key_association: "left"},
  {stimulus: "できる", stim_key_association: "left"},
  {stimulus: function(){
      var nameu = jsPsych.data.get().last(1).values()[0].name01;
      return nameu;
    }, stim_key_association: "right"},
  {stimulus: "可能", stim_key_association: "left"},
  {stimulus: "やれる", stim_key_association: "left"},
  {stimulus: "無理", stim_key_association: "right"},
  {stimulus: function(){
      var named = jsPsych.data.get().last(1).values()[0].name02;
      return named;
    }, stim_key_association: "right"},
  {stimulus: "やれる", stim_key_association: "left"},
  {stimulus: "可能", stim_key_association: "left"},
  {stimulus: "私", stim_key_association: "right"},
  {stimulus: "やれる", stim_key_association: "left"},
    {stimulus: function(){
      var named = jsPsych.data.get().last(1).values()[0].name02;
      return named;
    }, stim_key_association: "right"},
    {stimulus: "自分", stim_key_association: "right"},
    {stimulus: "達成", stim_key_association: "left"}
    ],
  repetitions: 1
};

//main1:self+good vs bad
var trial01_main01 = {
  timeline:[
    {
      type: 'iat-html',
      stimulus: jsPsych.timelineVariable('stimulus'),
      stim_key_association: jsPsych.timelineVariable('stim_key_association'),
      html_when_wrong: '<span style="color: red; font-size: 80px">X</span>',
      bottom_instructions: '<p>間違えるとバツが表示されます。バツが表示されたら反対のキーを押してください</p>',
      force_correct_key_press: true,
      display_feedback: true,
      left_category_key: 'E',
      right_category_key: 'I',
      left_category_label: ["成功</br></br>自己"],
      right_category_label: ["失敗"],
      response_ends_trial: true
    }
    ],  
  //IATで使う刺激
  timeline_variables: [
  {stimulus: "できる", stim_key_association: "left"},
  {stimulus: function(){
      var named = jsPsych.data.get().last(1).values()[0].name02;
      return named;
    }, stim_key_association: "left"},
  {stimulus: "不可能", stim_key_association: "right"},
  {stimulus: "達成", stim_key_association: "left"},
  {stimulus: "私", stim_key_association: "left"},
  {stimulus: "やれない", stim_key_association: "right"},
  {stimulus: function(){
      var nameu = jsPsych.data.get().last(1).values()[0].name01;
      return nameu;
    }, stim_key_association: "left"},
  {stimulus: "不可能", stim_key_association: "right"},
  {stimulus: "達成", stim_key_association: "left"},
  {stimulus: "無理", stim_key_association: "right"},
  {stimulus: "できない", stim_key_association: "right"},
   {stimulus: "可能", stim_key_association: "left"},
   {stimulus: "無理", stim_key_association: "right"},
   {stimulus: function(){
      var nameu = jsPsych.data.get().last(1).values()[0].name01;
      return nameu;
    }, stim_key_association: "left"},
   {stimulus: function(){
      var named = jsPsych.data.get().last(1).values()[0].name02;
      return named;
    }, stim_key_association: "left"},
  {stimulus: "私", stim_key_association: "left"},
  {stimulus: "不可能", stim_key_association: "right"},
  {stimulus: "できない", stim_key_association: "right"},
  {stimulus: "やれる", stim_key_association: "left"},
  {stimulus: "やれない", stim_key_association: "right"},
  {stimulus: "不可能", stim_key_association: "right"},
  {stimulus: "できない", stim_key_association: "right"},
  {stimulus: "自分", stim_key_association: "left"},
  {stimulus: "無理", stim_key_association: "right"},
  {stimulus: "可能", stim_key_association: "left"},
  {stimulus: "無理", stim_key_association: "right"},
  {stimulus: "できない", stim_key_association: "right"},
  {stimulus: "できる", stim_key_association: "left"},
  {stimulus: "自分", stim_key_association: "left"},
  {stimulus: "できない", stim_key_association: "right"},
  {stimulus: "不可能", stim_key_association: "right"},
  {stimulus: "自分", stim_key_association: "left"},
  {stimulus: "できる", stim_key_association: "left"},
  {stimulus: function(){
      var named = jsPsych.data.get().last(1).values()[0].name02;
      return named;
    }, stim_key_association: "left"},
  {stimulus: "不可能", stim_key_association: "right"},
  {stimulus: "達成", stim_key_association: "left"},
  {stimulus: "やれない", stim_key_association: "right"},
  {stimulus: "できない", stim_key_association: "right"},
  {stimulus: "私", stim_key_association: "left"},
  {stimulus: "やれない", stim_key_association: "right"},
  {stimulus: "自分", stim_key_association: "left"},
  {stimulus: "やれる", stim_key_association: "left"},
  {stimulus: "不可能", stim_key_association: "right"},
  {stimulus: function(){
      var named = jsPsych.data.get().last(1).values()[0].name02;
      return named;
    }, stim_key_association: "left"},
  {stimulus: "無理", stim_key_association: "right"}, 
  {stimulus: "やれない", stim_key_association: "right"},
  {stimulus: "やれる", stim_key_association: "left"},
  {stimulus: "できない", stim_key_association: "right"},
  {stimulus: function(){
      var nameu = jsPsych.data.get().last(1).values()[0].name01;
      return nameu;
    }, stim_key_association: "left"},
  {stimulus: "可能", stim_key_association: "left"},
  {stimulus: "無理", stim_key_association: "right"},
  {stimulus: "私", stim_key_association: "left"},
  {stimulus: "不可能", stim_key_association: "right"},
  {stimulus: "やれない", stim_key_association: "right"},
  {stimulus: "可能", stim_key_association: "left"},
  {stimulus: "やれない", stim_key_association: "right"},
  {stimulus: "自分", stim_key_association: "left"},
  {stimulus: "できない", stim_key_association: "right"},
  {stimulus: "達成", stim_key_association: "left"},
  {stimulus: "無理", stim_key_association: "right"},
  {stimulus: "私", stim_key_association: "left"},
  {stimulus: function(){
      var nameu = jsPsych.data.get().last(1).values()[0].name01;
      return nameu;
    }, stim_key_association: "left"},
  {stimulus: "やれる", stim_key_association: "left"},
  {stimulus: function(){
      var named = jsPsych.data.get().last(1).values()[0].name02;
      return named;
    }, stim_key_association: "left"},
  {stimulus: "できる", stim_key_association: "left"},
  {stimulus: "可能", stim_key_association: "left"},
  {stimulus: "やれる", stim_key_association: "left"},
  {stimulus: "無理", stim_key_association: "right"},
  {stimulus: "達成", stim_key_association: "left"},
  {stimulus: function(){
      var nameu = jsPsych.data.get().last(1).values()[0].name01;
      return nameu;
    }, stim_key_association: "left"},
  {stimulus: "できる", stim_key_association: "left"},
  {stimulus: "やれない", stim_key_association: "right"}
    ],
  repetitions: 1
};


//Block4:self+bad
var trial01_main02 = {
  timeline:[
    {
      type: 'iat-html',
      stimulus: jsPsych.timelineVariable('stimulus'),
      stim_key_association: jsPsych.timelineVariable('stim_key_association'),
      html_when_wrong: '<span style="color: red; font-size: 80px">X</span>',
      bottom_instructions: '<p>間違えるとバツが表示されます。バツが表示されたら反対のキーを押してください</p>',
      force_correct_key_press: true,
      display_feedback: true,
      left_category_key: 'E',
      right_category_key: 'I',
      left_category_label: ["成功"],
      right_category_label: ["失敗</br></br>自己"],
      response_ends_trial: true
    }
    ],  
  //IATで使う刺激
  timeline_variables: [
    /* 快語32 */
    {stimulus: "私", stim_key_association: "right"},
    {stimulus: function(){
      var named = jsPsych.data.get().last(1).values()[0].name02;
      return named;
    }, stim_key_association: "right"},
    {stimulus: "無理", stim_key_association: "right"},
    {stimulus: "できる", stim_key_association: "left"},
    {stimulus: "不可能", stim_key_association: "right"},
    {stimulus: "達成", stim_key_association: "left"},
    {stimulus: function(){
      var nameu = jsPsych.data.get().last(1).values()[0].name01;
      return nameu;
    }, stim_key_association: "right"},
    {stimulus: "できる", stim_key_association: "left"},
    {stimulus: "無理", stim_key_association: "right"},
    {stimulus: "やれる", stim_key_association: "left"},
    {stimulus: "やれない", stim_key_association: "right"},
    {stimulus: "可能", stim_key_association: "left"},
    {stimulus: function(){
      var nameu = jsPsych.data.get().last(1).values()[0].name01;
      return nameu;
    }, stim_key_association: "right"},
    {stimulus: "不可能", stim_key_association: "right"},
    {stimulus: "達成", stim_key_association: "left"},
    {stimulus: "やれない", stim_key_association: "right"},
    {stimulus: "やれる", stim_key_association: "left"},
    {stimulus: "可能", stim_key_association: "left"},
    {stimulus: "達成", stim_key_association: "left"},
    {stimulus: "やれない", stim_key_association: "right"},
     {stimulus: function(){
      var nameu = jsPsych.data.get().last(1).values()[0].name01;
      return nameu;
    }, stim_key_association: "right"},
    {stimulus: "無理", stim_key_association: "right"},
    {stimulus: "やれる", stim_key_association: "left"},
     {stimulus: "私", stim_key_association: "right"},
    {stimulus: "自分", stim_key_association: "right"},
    {stimulus: "可能", stim_key_association: "left"},
    {stimulus: "不可能", stim_key_association: "right"},
    {stimulus: "自分", stim_key_association: "right"},
    {stimulus: "できる", stim_key_association: "left"},
    {stimulus: "達成", stim_key_association: "left"},
    {stimulus: "不可能", stim_key_association: "right"},
    {stimulus: "できない", stim_key_association: "right"},
    {stimulus: "やれる", stim_key_association: "left"},
     {stimulus: function(){
      var named = jsPsych.data.get().last(1).values()[0].name02;
      return named;
    }, stim_key_association: "right"},
    {stimulus: "私", stim_key_association: "right"},
    {stimulus: "可能", stim_key_association: "left"},
    {stimulus: "できない", stim_key_association: "right"},
    {stimulus: "自分", stim_key_association: "right"},
    {stimulus: "できる", stim_key_association: "left"},
    {stimulus: "自分", stim_key_association: "right"},
    {stimulus: "不可能", stim_key_association: "right"},
    {stimulus: "私", stim_key_association: "right"},
    {stimulus: "やれる", stim_key_association: "left"},
    {stimulus: "可能", stim_key_association: "left"},
    {stimulus: function(){
      var nameu = jsPsych.data.get().last(1).values()[0].name01;
      return nameu;
    }, stim_key_association: "right"},
    {stimulus: "できない", stim_key_association: "right"},
    {stimulus: "できる", stim_key_association: "left"},
    {stimulus: "達成", stim_key_association: "left"},
    {stimulus: function(){
      var named = jsPsych.data.get().last(1).values()[0].name02;
      return named;
    }, stim_key_association: "right"},
    {stimulus: "やれる", stim_key_association: "left"},
    {stimulus: "自分", stim_key_association: "right"},
    {stimulus: "できない", stim_key_association: "right"},
    {stimulus: "可能", stim_key_association: "left"},
    {stimulus: "できる", stim_key_association: "left"},
    {stimulus: function(){
      var nameu = jsPsych.data.get().last(1).values()[0].name01;
      return nameu;
    }, stim_key_association: "right"},
    {stimulus: "できる", stim_key_association: "left"},
    {stimulus: "やれない", stim_key_association: "right"},
    {stimulus: "達成", stim_key_association: "left"},
    {stimulus: "やれない", stim_key_association: "right"},
    {stimulus: "やれる", stim_key_association: "left"},
    {stimulus: "可能", stim_key_association: "left"},
    {stimulus: "無理", stim_key_association: "right"},
    {stimulus: "できる", stim_key_association: "left"},
    {stimulus: function(){
      var named = jsPsych.data.get().last(1).values()[0].name02;
      return named;
    }, stim_key_association: "right"},
    {stimulus: "達成", stim_key_association: "left"},
    {stimulus: "やれる", stim_key_association: "left"},
    {stimulus: function(){
      var named = jsPsych.data.get().last(1).values()[0].name02;
      return named;
    }, stim_key_association: "right"},
    {stimulus: "可能", stim_key_association: "left"},
    {stimulus: "私", stim_key_association: "right"},
    {stimulus: "できない", stim_key_association: "right"},
    {stimulus: "達成", stim_key_association: "left"},
    {stimulus: "無理", stim_key_association: "right"}
    ],
  repetitions: 1
};




var experimentend = {
    type: 'instructions',
    pages: ["<p>課題は以上で全てになります。お疲れ様でした</p>"+"<p>次へを押していただくと、クラウドワークスの支払コード欄に記入していただく文字列が表示されます。</p>"
    ],
    allow_backward: false,
    show_clickable_nav: true,
    button_label_next: "次へ",
    on_finish: function() {
    firebase.database().ref(exp_id).set({
      data: jsPsych.data.get().values()
    })
   }
};

var endmessage = {
    type: 'instructions',
    pages: ["<p>調査にご協力いただき、どうもありがとうございました。調査終了後、以下の8桁の文字列をクラウドワークスの支払コード欄に記入して作業を完了させてください。</p>"+"<p>入力間違い防止のため、必ずコピー＆ペーストしてください。正しく記入されたことが確認できた場合に、報酬をお支払いします。</p>"+ r_num +"<p>ただし、上記コードを間違いなく納品して下さっても、ご回答の性別がクラウドワークスでのご登録と異なる場合、</br>いくつかの項目へのご回答が不適切だった場合には、謝礼をお支払いできませんので，あしからずご了承下さい</p>" + "<p>「次へ」をクリックして画面が白転してから、ウィンドウを閉じてください。</p>"
    ],
    allow_backward: false,
    show_clickable_nav: true,
    button_label_next: "次へ"
    
};








/* 実験の提示の順番 */
var timeline = [];

timeline.push(pc_check);



timeline.push({
  type: 'fullscreen',
  fullscreen_mode: true
});
timeline.push(nameget_q1);
timeline.push(nameget_q2);
timeline.push(iat_instruction_test);
timeline.push(trial_test01);
timeline.push(iat_instruction);
timeline.push(trial01_prac01);
timeline.push(iat_brakegood);
timeline.push(trial01_main01);
timeline.push(iat_brakechange);
timeline.push(trial01_prac02);
timeline.push(iat_brakebad);
timeline.push(trial01_main02);





timeline.push({
  type: 'fullscreen',
  fullscreen_mode: false
});

