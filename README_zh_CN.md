<h3 align="center">
  Screeps 游戏的每日提示。
</h3>
<p align="center">
  <a href="./README.md">English</a> | <a href="./README_zh_CN.md">简体中文</a>
</p>

----------

<!-- BEGIN -->
1. > To save your CPU, use less creeps of a larger size.

    为了节约 CPU，您应该生成少量的 creep，让每个 creep 携带尽可能多的身体部件。

2. > A good way to save CPU is caching often-used paths.

    一种比较好的节约 CPU 的方式是缓存经常使用的路径。

3. > The more body parts of one type a creep has, the greater its productivity.

    creep 携带的身体部件越多，它的生产率就越高。

4. > Use storage to not lose surplus of mined resources.

    使用 storage 来存储开采出来的过量资源。

5. > A resource abandoned on the ground eventually vanishes.

    被遗弃在地面上的资源最终会消失。

6. > Use towers to set up automatic defense of your room.

    使用<strong>塔</strong>来建立您房间的自动防御。

7. > The more small objects in the Memory, the more CPU spent on its parsing.

    内存中的小对象越多，其解析所花费的 CPU 越多。

8. > Inscreasing the <code>reusePath</code> option in the <code>Creep.moveTo</code> method helps saving CPU.

    为 <code>Creep.moveTo</code> 函数增加 <code>reusePath</code> 选项可以有效的节约 CPU。

9. > The <code>RANGED_ATTACK</code> body part is 3 times weaker than <code>ATTACK</code> and 2 times costlier at that.

    <code>RANGED_ATTACK</code> 身体部件的相对伤害只有 <code>ATTACK</code> 部件的 1/3，成本却高 2 倍。

10. > You can have as many rooms under your control as your Global Control Level.

    您可以控制的房间数与全局控制级别（GCL）数一样多。

11. > You can address from your script only those rooms that contain your creeps or structures.

    您只能从脚本中访问到那些包含您的 creep 或建筑物的房间。

12. > Observers allow to get the <code>Room</code> object for the rooms that have no objects of yours.

    如果房间里没有您的单位，您可以使用 Observer 来获取房间的 <code>Room</code> 对象。

13. > Build roads to save on <code>MOVE</code> body parts of your creeps.

    建造道路可以让您的使用更少的 <code>MOVE</code> 部件。

14. > Roads wear out as they are used, so don’t forget to repair them.

    道路在使用过程中会逐渐磨损，所以别忘了修理它们。

15. > Walls, roads, and containers don’t belong to any player, so they should be searched with the help of <code>FIND_STRUCTURES</code>, not <code>FIND_MY_STRUCTURES</code>.

    墙、道路和容器不属于任何玩家，因此应在 <code>FIND_STRUCTURES</code> 而不是 <code>FIND_MY_STRUCTURES</code> 下进行搜索。

16. > Use try/catch blocks in right places to avoid a complete halt of your script due to errors.

    在适当的位置使用 try/catch 代码块，以避免由于异常而导致脚本退出。

17. > Use branches to test and debug your temporary code and also do backups.

    使用独立的 git 分支来测试和调试您的临时代码，并进行备份。

18. > Set up a grunt task to write scripts on your local machine and commit them to Screeps.

    设置一个 grunt 任务，以便在本地计算机上编写脚本并将其提交给 Screeps。

19. > More spawns in a room allows building more creeps at a time.

    房间中出生点的数量越多，则同一时间可生产的 creep 也越多。

20. > The more spawn extensions in a room, the more energy you can spend on building one creep.

    房间中的扩展越多，您就可以用更多的能量来构建一个 creep。

21. > Spawn extensions capacity increases on room levels 7 and 8.

    当房间等级达到 7 和 8 级时，可以建造额外的出生点和扩展。

22. > Spawn extensions do not have to be placed near spawns, their range is the whole room.

    出生点扩展不需要放置在出生点附近，它们的范围是整个房间。

23. > Towers can aim at any object in a room even through walls and obstacles.

    塔可以透过墙和障碍物瞄准房间中的任何物体。

24. > A tower’s effectiveness depends on the distance to the target.

    塔的工作效率取决于到目标的距离。

25. > Power banks appear only in neutral rooms that divide living sectors on the map.

    超能宝库仅出现在中立房间中，该房间将地图的普通活动区分开。

26. > Ramparts can be built not just on empty squares but on existing structures too.

    城墙不仅可以在空旷的区域上建造，而且可以在现有结构上建造。

27. > While not destroyed, a rampart protects a creep or building on its square from any type of attack.

    当城墙未被破坏时，它可以保护 creep 或建筑物免受任何形式的攻击。

28. > Creeps cannot move faster than 1 square per tick.

    creep 的移动速度在每 tick 最快移动 1 个单位。

29. > Use links to save on creep building and CPU.

    使用链接可以节约 CPU 和生产 creep 的资源。

30. > Links can pass energy to other links at any point inside the same room.

    链接可以将能量传递到同一房间内任何位置的其他链接。

31. > You can build and repair roads and containers in any rooms, even neutral ones.

    您可以在任何房间，甚至中立房间中建造和维修道路和容器。

32. > Leaderboards reset to zero each month, while your game process continues.

    排行榜每月重置为零，而游戏过程仍在继续。

33. > Modular architecture of a script will allow easy testing of individual functions in the simulator.

    脚本的模块化架构使得您可以在模拟器中轻松测试单个函数。

34. > You can create any objects in the simulator to test your script.

    您可以在模拟器中创建任何对象来测试脚本。

35. > The <code>console.log</code> function of the simulator displays a live expandable object in the browser console.

    模拟器的 <code>console.log</code> 函数可以在浏览器的控制台中同步显示，可以对进行展开操作。

36. > Walking over swamps is 5 times slower compared to plain land.

    在沼泽地上行走比平原慢 5 倍。

37. > Ramparts and walls initially have 1 hit point. Repair them after construction.

    城墙和墙最初有 1 点生命值。建造完之后要记得进行维修。

38. > You cannot have more than 3 rooms in the Novice Area.

    新手区域中的房间数不能超过 3 个。

39. > If you want to play from scratch, you can always Respawn in a new room.

    如果您想从头开始玩，您随时可以在一个新房间里重生。

40. > Every creep dies after 1500 ticks, however you can prolong its life using the <code>Spawn.renewCreep</code> method.

    每个 creep 都会在 1500 tick 后死亡，但是您可以使用 <code>Spawn.renewCreep</code> 函数来延长其寿命。

41. > To control a room continuously, you need to upgrade your controller from time to time.

    要持续控制房间，您需要不断地升级控制器。

42. > A spawn automatically replenishes itself with power until the energy in the room reaches 300 units.

    出生点会自动补充能量，直到房间中的能量达到 300 为止。

43. > Test various game scenarios in the simulator in order to be prepared for surprises.

    在模拟器中测试各种游戏场景，以便为意外做好准备。

44. > Always try to control as many rooms as your GCL allows. It will allow your colony to develop at the maximum speed.

    始终尝试控制尽可能多的 GCL 所允许的房间数。这将使您的殖民地以最大的速度发展。

45. > You can use more CPU than your CPU limit allows in short bursts.

    您可以在短时间内使用超过 CPU 上限的资源。

46. > Unless you use up your CPU limit each tick, it is stored for future use.

    除非您每个 tick 都用光了您的 CPU，不然没有用掉的 CPU 会被存起来以备以后使用。

47. > There is a keyword <code>debugger</code> in the simulator that stops your script in the browser.

    模拟器中有一个 <code>debugger</code> 关键字，可以用于在浏览器中暂停脚本。

48. > Your CPU Limit depends on your Global Control Level.

    您的 CPU 限制取决于您的 GCL。

49. > Send emails to yourself with the function <code>Game.notify</code> to be aware of everything happening in the game.

    通过使用 <code>Game.notify</code> 函数向自己发送邮件可以让您了解游戏中发生的一切。

50. > The <code>Game.notify</code> function automatically groups identical messages using the specified interval.

    <code>Game.notify</code> 函数使用指定的时间间隔自动将相同的消息分组。

51. > It is too costly and senseless to maintain an army of military creeps in the peacetime.

    在和平时期维持一支由军队组成的 creep 的代价太高而且毫无意义。

52. > The creep memory is saved upon death, so clear <code>Memory.creeps.*</code> to prevent overflowing.

    creep 的内存将在死亡时保存，因此请清除 <code>Memory.creeps.*</code> 以防止溢出。

53. > You can output HTML content to the console, like links to rooms.

    您可以将 HTML 内容输出到控制台，例如一个跳转到指定房间的超文本链接。

54. > Each game action has a constant cost of 0.2 CPU.

    每个游戏动作的固定成本为 0.2 CPU。

55. > Creeps can miss each other if they walk towards each other simultaneously or follow step by step.

    如果 creep 同时走向对方或逐步跟随，它们可能会彼此错过。

56. > A creep can execute some commands simultaneously in one tick, for example <code>move</code>+<code>build</code>+<code>dropEnergy</code>.

    creep 可以在一个 tick 内同时执行多个命令，例如 <code>move</code>+<code>build</code>+<code>dropEnergy</code>.

57. > <code>require</code> spends CPU depending on the size and complexity of the module loaded.

    <code>require</code> 花费的 CPU 取决于加载模块的大小和复杂性。

58. > Use loop architecture to save CPU on the logic you do not have to run each tick.

    Use loop architecture to save CPU on the logic you do not have to run each tick.

59. > The game is fully recorded, so you can see replay of any room for the past several days.

    游戏已经被完整录制，所以您可以随时回放过去几天发生的事情。

60. > If CPU limit raises, your script will execute only partially.

    如果运算量超过 CPU 限制，脚本将只执行部分代码。

61. > To output an object content into the console, use <code>JSON.stringify</code>.

    要将对象内容输出到控制台，请使用 <code>JSON.stringify</code>。

62. > A creep with an <code>ATTACK</code> part automatically strikes back at every attacker by <code>ATTACK</code>.

    具有 <code>ATTACK</code> 身体部件的 creep 会通过 <code>ATTACK</code> 自动攻击每个进攻者。

63. > Respawning in a chosen room would automatically destroy all structures except walls and roads.

    在选定的房间中重生会自动破坏除墙和道路以外的所有建筑物。

64. > You can apply <code>transfer</code> and <code>heal</code> to another player’s creep, and <code>transfer,</code> <code>build</code> and <code>repair</code> to others’ structures.

    您可以调用 <code>transfer</code> 与 <code>heal</code> 将资源转移给其他玩家的 creep，或者治疗其他玩家的 creep，同理，您也可以对其他玩家的建筑调用 <code>transfer</code>、<code>build</code>、<code>repair</code> 函数。

65. > To prevent other players from seizing a neutral room you want, use <code>Creep.reserveController</code>.

    为了防止其他玩家占领您想要的中立房间，请使用 <code>Creep.reserveController</code>。

66. > Energy in a storage can not be used to spawn creeps. Transfer it to a spawn or extensions instead.

    storage 里储存的能量不能用来产生 creep，要先将能转移到一个出生点或扩展。

67. > You can speed up downgrading of hostile room controller by using <code>Creep.attackController</code> on it.

    您可以通过对房间控制器使用 <code>Creep.attackController</code> 来加速它的的降级。

68. > Sources in neutral rooms have reduced capacity. Reserve or claim the room to restore it to full capacity.

    中立房间中矿的能量有上限。预订或占领房间可以使其恢复到最大容量。

69. > Use <code>Room.energyAvailable</code> and <code>Room.energyCapacityAvailable</code> to determine how much energy all the spawns and extensions in the room contain.

    使用 <code>Room.energyAvailable</code> 和 <code>Room.energyCapacityAvailable</code> 来确定房间中所有出生点和扩展所包含的总能量。

70. > Dead body parts have weight and generate fatigue as well.

    坏掉的身体部件也会产生重量和疲劳。
<!-- END -->
