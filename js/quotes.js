const quotes = [
  {
    quote: '나는 성공을 꿈꾸지 않았다. 나는 그를 위해 일했다.',
    author: '에스티 로더'
  },
  {
    quote: '독창적이려고 하지 말고, 그냥 잘하려고 해라.',
    author: '폴 랜드'
  },
  {
    quote: '좋은 것을 포기하는 것을 두려워하지 말고, 더 나은 것을 향해 가라.',
    author: '존 D. 록펠러'
  },
  {
    quote: '날 수 없다면 달리고, 달릴 수 없다면 걸어라. 걸을 수 없다면 기어가라. 하지만 무슨 일이 있어도 계속 앞으로 나아가야 한다.',
    author: '마틴 루터 킹 주니어'
  },
  {
    quote: '우리의 가장 큰 약점은 포기하는 것이다. 가장 확실한 성공 방법은 한 번 더 시도하는 것이다.',
    author: '토마스 에디슨'
  },
  {
    quote: '자신을 가장 빨리 바꾸는 방법은 이미 당신이 되고 싶은 사람들과 함께 어울리는 것이다.',
    author: '리드 호프먼'
  },
  {
    quote: '돈은 로드 트립 중의 휘발유와 같다. 여행 중에 기름이 떨어지지 않도록 해야 하지만, 주유소만 도는 여행을 하는 것은 아니다.',
    author: '팀 오라일리'
  },
  {
    quote: '어떤 사람들은 성공을 꿈꾸고, 다른 사람들은 매일 아침 일어나 그것을 실현한다.',
    author: '웨인 후이젠가'
  },
  {
    quote: '시작하고 실패하는 것보다 더 나쁜 것은 시작하지 않는 것이다.',
    author: '세스 고딘'
  },
  {
    quote: '정말로 무언가를 하고 싶다면 방법을 찾을 것이고, 그렇지 않다면 변명을 찾을 것이다.',
    author: '짐 론'
  },
  {
    quote: '성공은 끝이 아니고, 실패는 치명적이지 않다. 중요한 것은 계속 나아가는 용기다.',
    author: '윈스턴 처칠'
  },
  {
    quote: '노력은 결코 배신하지 않는다.',
    author: '하뉴 유즈루'
  },
  {
    quote: '오늘 걷지 않으면, 내일은 뛰어야 한다.',
    author: '익명'
  },
  {
    quote: '변화는 고통스럽지만, 그 고통을 통해 우리는 성장한다.',
    author: '토니 로빈스'
  },
  {
    quote: '성공은 우연이 아니다. 그것은 노력, 인내, 배움, 희생, 그리고 무엇보다도 자신을 사랑하는 일의 결과이다.',
    author: '펠레'
  }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;