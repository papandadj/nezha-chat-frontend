export default {
  // 当前用户
  user: {
    name: 'coffce',
    img: 'dist/images/1.jpg'
  },
  // 会话列表
  sessions: [
    {
      id: 1,
      name: '示例介绍',
      img: 'http://localhost:8081/static/default/nezha.png',
      messages: [
        {
          content: '哪吒从肉球中腾空出世，便力大无穷，女娲因此选他为人间正义与邪恶力量抗衡的正义化身。作为邪恶力量代表的石矶一心想占有哪吒身上的力量，屡遭失败后就生杀机。',
          date: new Date()
        }, {
          content: '哪吒在女娲和伙伴们的帮助下，同石矶展开了惊心动魄的斗争，闯过一道道艰险难关，并最终由一个不谙熟人世的顽童成长为一个充满童趣的小英雄。... [2]  大魔头石矶潜伏千年，伺机向正义力量反扑，她帮助残暴的纣王镇压天下的民众。正义力量期待着一个英雄的诞生，而石矶为了自己的阴谋，开始不断指使她的爪牙申公豹除掉哪吒。哪吒尚未出生，就不断遭遇危险，出生后，更是',
          date: new Date()
        }
      ]
    },
    {
      id: 2,
      name: 'webpack',
      img: 'http://localhost:8081/static/default/nezha.png',
      messages: []
    }
  ],
  // 当前选中的会话
  currentSessionId: 1,
  // 过滤出只包含这个key的会话
  filterKey: ''
}
