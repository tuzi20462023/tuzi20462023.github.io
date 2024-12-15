const questions = [
    // 第一部分：日常生活场景（1-9题）
    {
        title: "1. 在超市排队结账时，前面的顾客和收银员发生争执，导致长时间等待：",
        options: [
            { text: "A. 默默观察这个情境，思考每个人的处境", score: 6 },
            { text: "B. 换另一个收银台重新排队", score: 2 },
            { text: "C. 在内心抱怨和不满", score: 1 },
            { text: "D. 试图调解或提供帮助", score: 8 },
            { text: "E. 感受这个时刻带来的启示", score: 10 }
        ]
    },
    {
        title: "2. 清晨醒来发现窗外下着大雨，原定的户外活动可能需要取消：",
        options: [
            { text: "A. 立即联系朋友改期", score: 2 },
            { text: "B. 思考为什么总在重要活动时遇到坏天气", score: 4 },
            { text: "C. 观察内心对这个变化的抗拒", score: 8 },
            { text: "D. 相信雨天自有其独特的意义", score: 10 },
            { text: "E. 调整计划，享受室内时光", score: 6 }
        ]
    },
    {
        title: "3. 搬入新居后发现隔壁经常传来孩子哭闹声：",
        options: [
            { text: "A. 理解这是生活的一部分，保持包容", score: 8 },
            { text: "B. 考虑是否搬家", score: 2 },
            { text: "C. 反思��己为什么会遇到这种情况", score: 10 },
            { text: "D. 主动和邻居沟通交流", score: 6 },
            { text: "E. 观察这种声音对自己的影响", score: 4 }
        ]
    },
    {
        title: "4. 路边一只受伤的小动物：",
        options: [
            { text: "A. 躲开走掉，避免麻烦", score: 1 },
            { text: "B. 打电话寻求专业救助", score: 4 },
            { text: "C. 停下来观察并提供帮助", score: 8 },
            { text: "D. 思考生命的脆弱与关联", score: 10 },
            { text: "E. 感受这个时刻的特殊意义", score: 6 }
        ]
    },
    {
        title: "5. 工作中一个重要项目意外失败：",
        options: [
            { text: "A. 分析原因以避免重蹈覆辙", score: 4 },
            { text: "B. 观察自己对失败的情绪反应", score: 8 },
            { text: "C. 相信这可能是更好机会的铺垫", score: 10 },
            { text: "D. 集中精力补救和改进", score: 2 },
            { text: "E. 思考这个经历的更深层意义", score: 6 }
        ]
    },
    {
        title: "6. 整理旧物时发现一张童年照片：",
        options: [
            { text: "A. 简单回忆后继续整理", score: 2 },
            { text: "B. 深入回顾那段时光的感受", score: 6 },
            { text: "C. 思考自己的成长历程", score: 8 },
            { text: "D. 感受与童年自己的连接", score: 10 },
            { text: "E. 觉察时间线性存在的幻象", score: 4 }
        ]
    },
    {
        title: "7. 经常在相似时间醒来，发现闹钟还没响：",
        options: [
            { text: "A. 调整作息规律", score: 2 },
            { text: "B. 认为这是身体的自然节律", score: 4 },
            { text: "C. 探索内在时钟的奥秘", score: 8 },
            { text: "D. 感受生理与意识的同步", score: 10 },
            { text: "E. 思考时间与意识的关系", score: 6 }
        ]
    },
    {
        title: "8. 连续几天做相似主题的梦：",
        options: [
            { text: "A. 上网搜索梦的含义", score: 2 },
            { text: "B. 记录下来等待后续发展", score: 4 },
            { text: "C. 探索梦境传递的讯息", score: 8 },
            { text: "D. 观察现实生活中的对应", score: 6 },
            { text: "E. 理解为意识的跨维探索", score: 10 }
        ]
    },
    {
        title: "9. 遇到重要选择时：",
        options: [
            { text: "A. 详细列出利弊得失", score: 2 },
            { text: "B. 请教信任���人建议", score: 4 },
            { text: "C. 静心倾听内在指引", score: 10 },
            { text: "D. 观察不同选择带来的感受", score: 8 },
            { text: "E. 理解每个选择创造的可能性", score: 6 }
        ]
    },
    // 第二部分：人际互动场景（10-18题）
    {
        title: "10. 与好友发生争执后：",
        options: [
            { text: "A. 等待对方先道歉", score: 1 },
            { text: "B. 主动联系和解", score: 4 },
            { text: "C. 反思争执背后的原因", score: 8 },
            { text: "D. 观察自己的情绪变化", score: 6 },
            { text: "E. 视为关系提升的机会", score: 10 }
        ]
    },
    {
        title: "11. 遇到求助的陌生人：",
        options: [
            { text: "A. 警惕地保持距离", score: 1 },
            { text: "B. 视情况提供帮助", score: 4 },
            { text: "C. 感受内在的连接", score: 8 },
            { text: "D. 思考偶遇的意义", score: 6 },
            { text: "E. 观察自己的第一反应", score: 10 }
        ]
    },
    {
        title: "12. 发现同事在背后议论自己：",
        options: [
            { text: "A. 直接找对方对质", score: 2 },
            { text: "B. 保持距离，减少互动", score: 4 },
            { text: "C. 反思是否自己有问题", score: 6 },
            { text: "D. 观察这件事的触发点", score: 8 },
            { text: "E. 理解这是一面镜子", score: 10 }
        ]
    },
    {
        title: "13. 收到意外的表扬或肯定：",
        options: [
            { text: "A. 谦虚地表示感谢", score: 4 },
            { text: "B. 分享荣誉给团队", score: 6 },
            { text: "C. 感受内在的喜悦", score: 8 },
            { text: "D. 观察自己的反应", score: 10 },
            { text: "E. 理解为能量的循环", score: 10 }
        ]
    },
    {
        title: "14. 面对他人的负面情绪：",
        options: [
            { text: "A. 试图开导对方", score: 4 },
            { text: "B. 保持适当的距离", score: 2 },
            { text: "C. 觉察自己的情绪变化", score: 8 },
            { text: "D. 理解对方的处境", score: 6 },
            { text: "E. 感受情绪场的互动", score: 10 }
        ]
    },
    {
        title: "15. 老朋友突然联系叙旧：",
        options: [
            { text: "A. 简单寒暄几句", score: 2 },
            { text: "B. 约时间见面详谈", score: 4 },
            { text: "C. 感受时空的联结", score: 8 },
            { text: "D. 回顾共同的记忆", score: 6 },
            { text: "E. 觉察这个时机的特殊性", score: 10 }
        ]
    },
    {
        title: "16. 在人群中感到格格不入：",
        options: [
            { text: "A. 尽快离开现场", score: 2 },
            { text: "B. 努力融入氛围", score: 4 },
            { text: "C. 观察这种疏离感", score: 8 },
            { text: "D. 保持自在的状态", score: 6 },
            { text: "E. 探索这种体验的意义", score: 10 }
        ]
    },
    {
        title: "17. 遇到特别投缘的陌生人：",
        options: [
            { text: "A. 保持礼貌的距离", score: 2 },
            { text: "B. 主动表达好感", score: 4 },
            { text: "C. 感受内在的共鸣", score: 8 },
            { text: "D. 探索缘分的奥秘", score: 6 },
            { text: "E. 理解灵魂层面的相遇", score: 10 }
        ]
    },
    {
        title: "18. 与家人产生代沟：",
        options: [
            { text: "A. 坚持自己的观点", score: 2 },
            { text: "B. 试图理解对方", score: 4 },
            { text: "C. 观察双方的差异", score: 8 },
            { text: "D. 寻找沟通的方式", score: 6 },
            { text: "E. 感受时代的演进", score: 10 }
        ]
    },
    // 第三部分：内在体验场景（19-27题）
    {
        title: "19. 独处时的感受：",
        options: [
            { text: "A. 感到无聊和空虚", score: 2 },
            { text: "B. 做些喜欢的事", score: 4 },
            { text: "C. 观察内在的声音", score: 8 },
            { text: "D. 享受宁静时光", score: 6 },
            { text: "E. 体验存在的本质", score: 10 }
        ]
    },
    {
        title: "20. 面对重复出现的困境：",
        options: [
            { text: "A. 寻求外部帮助", score: 2 },
            { text: "B. 改变处理方式", score: 4 },
            { text: "C. 探索内在模式", score: 8 },
            { text: "D. 接纳当前状态", score: 6 },
            { text: "E. 理解循环的意义", score: 10 }
        ]
    },
    {
        title: "21. 生活中遇到巧合：",
        options: [
            { text: "A. 认为纯属偶然", score: 2 },
            { text: "B. 记录这些经历", score: 4 },
            { text: "C. 寻找潜在联系", score: 8 },
            { text: "D. 感受同步性", score: 6 },
            { text: "E. 理解实相的创造", score: 10 }
        ]
    },
    {
        title: "22. 感到强烈的情绪波动：",
        options: [
            { text: "A. 寻求发泄方式", score: 2 },
            { text: "B. 调节呼吸平静", score: 4 },
            { text: "C. 觉察情绪来源", score: 8 },
            { text: "D. 允许情绪流动", score: 6 },
            { text: "E. 体验能量转化", score: 10 }
        ]
    },
    {
        title: "23. 对未来感到焦虑：",
        options: [
            { text: "A. 制定详细计划", score: 2 },
            { text: "B. 放松心情休息", score: 4 },
            { text: "C. 探索焦虑根源", score: 8 },
            { text: "D. 活在当下时刻", score: 6 },
            { text: "E. 理解时间的幻象", score: 10 }
        ]
    },
    {
        title: "24. 经历失眠时：",
        options: [
            { text: "A. 吃点安眠药物", score: 2 },
            { text: "B. 数羊或听音乐", score: 4 },
            { text: "C. 觉察清醒状态", score: 8 },
            { text: "D. 享受静谧时光", score: 6 },
            { text: "E. 探索意识的变化", score: 10 }
        ]
    },
    {
        title: "25. 面对重要抉择：",
        options: [
            { text: "A. 理性分析利弊", score: 2 },
            { text: "B. 征询他人意见", score: 4 },
            { text: "C. 聆听内心声音", score: 8 },
            { text: "D. 观察各种可能", score: 6 },
            { text: "E. 感受能量指引", score: 10 }
        ]
    },
    {
        title: "26. 对生命意义的思考：",
        options: [
            { text: "A. 追求世俗成就", score: 2 },
            { text: "B. 实现个人价值", score: 4 },
            { text: "C. 探索内在真相", score: 8 },
            { text: "D. 服务他人成长", score: 6 },
            { text: "E. 体验存在之美", score: 10 }
        ]
    },
    {
        title: "27. 面对未知的态度：",
        options: [
            { text: "A. 谨慎防范风险", score: 2 },
            { text: "B. 保持好奇探索", score: 4 },
            { text: "C. 观察内在反应", score: 8 },
            { text: "D. 拥抱不确定性", score: 6 },
            { text: "E. 感受无限可能", score: 10 }
        ]
    },
    // 第四部分：生活实践场景（28-36题）
    {
        title: "28. 早晨醒来的第一件事：",
        options: [
            { text: "A. 查看手机信息", score: 2 },
            { text: "B. 伸展放松身体", score: 4 },
            { text: "C. 感恩新的一天", score: 8 },
            { text: "D. 觉察呼吸状态", score: 6 },
            { text: "E. 体验意识苏醒", score: 10 }
        ]
    },
    {
        title: "29. 工作中遇到压力：",
        options: [
            { text: "A. 加班加点解决", score: 2 },
            { text: "B. 适当放松休息", score: 4 },
            { text: "C. 觉察压力来源", score: 8 },
            { text: "D. 调整工作方式", score: 6 },
            { text: "E. 理解成长契机", score: 10 }
        ]
    },
    {
        title: "30. 处理个人物品时：",
        options: [
            { text: "A. 快速完成任务", score: 2 },
            { text: "B. 保持整洁有序", score: 4 },
            { text: "C. 感受物品能量", score: 8 },
            { text: "D. 思考使用价值", score: 6 },
            { text: "E. 觉察依附关系", score: 10 }
        ]
    },
    {
        title: "31. 日常饮食习惯：",
        options: [
            { text: "A. 随便应付一下", score: 2 },
            { text: "B. 注重营养均衡", score: 4 },
            { text: "C. 感恩食物来源", score: 8 },
            { text: "D. 享受进食过程", score: 6 },
            { text: "E. 觉察身体需求", score: 10 }
        ]
    },
    {
        title: "32. 面对生活中的变化：",
        options: [
            { text: "A. 抗拒不适应感", score: 2 },
            { text: "B. 努力适应改变", score: 4 },
            { text: "C. 观察内在反应", score: 8 },
            { text: "D. 接纳自然流动", score: 6 },
            { text: "E. 感受进化动力", score: 10 }
        ]
    },
    {
        title: "33. 日常运动锻炼：",
        options: [
            { text: "A. 被动应付完成", score: 2 },
            { text: "B. 坚持规律运动", score: 4 },
            { text: "C. 感受身体变化", score: 8 },
            { text: "D. 享受运动过程", score: 6 },
            { text: "E. 体验能量流动", score: 10 }
        ]
    },
    {
        title: "34. 面对生活琐事：",
        options: [
            { text: "A. 匆忙完成了事", score: 2 },
            { text: "B. 认真负责处理", score: 4 },
            { text: "C. 保持专注当下", score: 8 },
            { text: "D. 体会生活细节", score: 6 },
            { text: "E. 感受存在之美", score: 10 }
        ]
    },
    {
        title: "35. 休闲时光的安排：",
        options: [
            { text: "A. 刷手机消磨时间", score: 2 },
            { text: "B. 培养兴趣爱好", score: 4 },
            { text: "C. 静心冥想练习", score: 8 },
            { text: "D. 享受独处时光", score: 6 },
            { text: "E. 探索内在世界", score: 10 }
        ]
    },
    {
        title: "36. 生活环境的布置：",
        options: [
            { text: "A. 随意摆放使用", score: 2 },
            { text: "B. 追求整洁美观", score: 4 },
            { text: "C. 注重能量流动", score: 8 },
            { text: "D. 创造和谐氛围", score: 6 },
            { text: "E. 体现内在状态", score: 10 }
        ]
    }
];

const levelDescriptions = {
    level5: {
        range: [324, 360],
        title: "觉知创造者",
        description: `您展现出卓越的意识觉知能力和深刻的实相理解。您不仅能觉察到日常生活中的多维信息，还能主动参与创造自己的体验。您对生命的理解已经超越了一般的物质层面，能够感知到更深层的意义和联系。

具体表现：
1. 能够敏锐觉察内在状态的细微变化
2. 自然理解并运用实相创造的原则
3. 对同步性事件有深刻的认知和体验
4. 能够在多维度层面理解和处理问题
5. 具备强大的内在指引感知能力`
    },
    level4: {
        range: [288, 323],
        title: "意识探索者",
        description: `您已经开启了深层的意识探索之旅，具备良好的觉知能力和实相理解。您能够识别生活中的深层模式，并开始有意识地参与创造过程。

具体表现：
1. 对生活体验保持稳定的觉知状态
2. 能够识别内在信念与外在实相的关联
3. 具备基本的能量感知和运用能力
4. 在处理问题时能考虑多个维度
5. 对灵性成长有持续的探索兴趣`
    },
    level3: {
        range: [252, 287],
        title: "觉知成长者",
        description: `您正在经历意识觉醒的过程，开始注意到生活中更深层的意义。您对自我认知和实相本质有了初步的理解，并愿意进一步探索。

具体表现：
1. 开始关注内在体验和感受
2. 能够觉察某些重复出现的生活模式
3. 对同步性事件保持开放态度
4. 有意识地探索生命的意义
5. 愿意尝试新的观点和方法`
    },
    level2: {
        range: [216, 251],
        title: "寻求探索者",
        description: `您对生活中的深层意义产生了兴趣，开始寻求超越表面的理解。虽然主要还是在物质层面运作，但已经萌生了探索的愿望。

具体表现：
1. 对生命意义产生思考
2. 开始注意到某些特别的巧合
3. 对内在体验有初步关注
4. 愿意了解不同的观点
5. 对灵性话题保持开放态度`
    },
    level1: {
        range: [180, 215],
        title: "初始体验者",
        description: `您目前主要在物质层面理解和体验生活，但已经开始感受到某些超越常规的体验。这是一个重要的起点，为更深入的探索奠定基础。

具体表现：
1. 主要依靠理性思维处理问题
2. 偶尔体验到特别的感受
3. 对某些无法解释的现象感兴趣
4. 保持实用主义的态度
5. 愿意接触新的观点`
    }
}; 