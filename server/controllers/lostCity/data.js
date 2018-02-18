const baseCards = [
  {id: 0, color: 'red', content: 0}, {id: 1, color: 'red', content: 0}, {id: 2, color: 'red', content: 0},
  {id: 3, color: 'green', content: 0}, {id: 4, color: 'green', content: 0}, {id: 5, color: 'green', content: 0},
  {id: 6, color: 'blue', content: 0}, {id: 7, color: 'blue', content: 0}, {id: 8, color: 'blue', content: 0},
  {id: 9, color: 'yellow', content: 0}, {id: 10, color: 'yellow', content: 0}, {id: 11, color: 'yellow', content: 0},
  {id: 12, color: 'white', content: 0}, {id: 13, color: 'white', content: 0}, {id: 14, color: 'white', content: 0},
  {id: 15, color: 'red', content: 2}, {id: 16, color: 'red', content: 3}, {id: 17, color: 'red', content: 4},
  {id: 18, color: 'red', content: 5}, {id: 19, color: 'red', content: 6}, {id: 20, color: 'red', content: 7},
  {id: 21, color: 'red', content: 8}, {id: 22, color: 'red', content: 9}, {id: 23, color: 'red', content: 10},
  {id: 24, color: 'green', content: 2}, {id: 25, color: 'green', content: 3}, {id: 26, color: 'green', content: 4},
  {id: 27, color: 'green', content: 5}, {id: 28, color: 'green', content: 6}, {id: 29, color: 'green', content: 7},
  {id: 30, color: 'green', content: 8}, {id: 31, color: 'green', content: 9}, {id: 32, color: 'green', content: 10},
  {id: 33, color: 'blue', content: 2}, {id: 34, color: 'blue', content: 3}, {id: 35, color: 'blue', content: 4},
  {id: 36, color: 'blue', content: 5}, {id: 37, color: 'blue', content: 6}, {id: 38, color: 'blue', content: 7},
  {id: 39, color: 'blue', content: 8}, {id: 40, color: 'blue', content: 9}, {id: 41, color: 'blue', content: 10},
  {id: 42, color: 'yellow', content: 2}, {id: 43, color: 'yellow', content: 3}, {id: 44, color: 'yellow', content: 4},
  {id: 45, color: 'yellow', content: 5}, {id: 46, color: 'yellow', content: 6}, {id: 47, color: 'yellow', content: 7},
  {id: 48, color: 'yellow', content: 8}, {id: 49, color: 'yellow', content: 9}, {id: 50, color: 'yellow', content: 10},
  {id: 51, color: 'white', content: 2},  {id: 52, color: 'white', content: 3},  {id: 53, color: 'white', content: 4},
  {id: 54, color: 'white', content: 5},  {id: 55, color: 'white', content: 6},  {id: 56, color: 'white', content: 7},
  {id: 57, color: 'white', content: 8},  {id: 58, color: 'white', content: 9},  {id: 59, color: 'white', content: 10},
]

const cardColorSort = {
  0: "red",  1: "green",  2: "blue",  3: "yellow",  4: "white",
  "red": 0,  "green": 1,  "blue": 2,  "yellow": 3,  "white": 4,
}

const getRandomCards = () => {
  let cards = [...baseCards];
  for (var i = 0; i < 120; i++) {
    let r1 = Math.floor(Math.random()*59)
    let r2 = Math.floor(Math.random()*59)
    [cards[r1], card[r2]] = [cards[r2], cards[r1]]
  }
  cards.forEach(i => i.public = true)
  return cards
}

const getEmptyPlacePile = (isPublic) => {
  let pile = [
    {id: -1, color: 'red', empty: true},
    {id: -2, color: 'green', empty: true},
    {id: -3, color: 'blue', empty: true},
    {id: -4, color: 'yellow', empty: true},
    {id: -5, color: 'white', empty: true},
  ]
  if (isPublic) {
    pile.forEach(i => i.public = true)
  }
  return pile
}

const getCardIndex = (pile, card) => {
  for (var i = 0; i < pile.length; i++) {
    if (pile[i].id == card.id) {
      return i;
    }
  }
}

class LostCity {
  constructor() {
    this.pile = getRandomCards();
    this.player1Hand = this.pile.splice(0, 8)
    this.player1Pile = getEmptyPlacePile()
    this.discardPileTopCard = getEmptyPlacePile(true)
    this.discardPiles = this.discardPileTopCard.map(i => [i])
    this.player2Hand = this.pile.splice(0, 8)
    this.player2Pile = getEmptyPlacePile()
  }
  pickCard(player, discardPile) {
    let hand, card, colorIndex = cardColorSort[discardPile];
    if (player == 1) {
      hand = this.player1Hand
    } else {
      hand = this.player2Hand
    }
    if (pile) {
      card = this.discardPiles[colorIndex].pop();
      this.discardPileTopCard[colorIndex] = this.discardPiles[colorIndex][this.discardPiles[colorIndex].length-1]
    } else {
      card = this.pile.pop()
    }
    card.public = false;
    hand.push(card)
    return card;
  }
  discardCard(player, card) {
    let hand, cardIndex, colorIndex = cardColorSort[card.color];
    if (player == 1) {
      hand = this.player1Hand
    } else {
      hand = this.player2Hand
    }
    index = getCardIndex(hand, card);
    hand.splice(index, 1)
    card.public = true
    this.discardPileTopCard[colorIndex] = card
    this.discardPiles[colorIndex].push(card)
  }
  playCard() {

  }
}

/*
数据：
  公共牌堆 [Card]
  手牌 [Card * 8]
  放置牌堆 [[Card], [Card], [Card], [Card], [Card]]
  弃牌堆 [[Card], [Card], [Card], [Card], [Card]]
  放置牌堆Top牌 [Card * 5] - 通过get方法获得
  弃牌堆Top牌 [Card * 5] - 通过get方法获得
  公共牌堆牌数 Count - 通过get方法获得
方法：
  初始化
    公共牌堆 - 所有卡牌 乱序
    手牌 - 公共牌堆 前16张
    放置牌堆 - [[EmptyCard] * 5]
    弃牌堆 - [[EmptyCard] * 5]
    放置牌堆Top牌 - [EmptyCard * 5]
    弃牌堆Top牌 - [EmptyCard * 5]
    公共牌堆牌数 - Count = 44
  拿牌
    公共牌堆 || 弃牌堆[color] pop
    手牌 push
  弃牌
    手牌 splice
    弃牌堆[color] push
  出牌
    手牌 splice
    放置牌堆[color] push
  结算
    结算放置牌堆
  get
    放置牌堆Top牌
    弃牌堆Top牌
    公共牌堆牌数
*/
