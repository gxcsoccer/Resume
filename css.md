CSS的position/float/display都有哪些取值，它们相互叠加时的行为

position:
1. absolute
2. relative
3. static
4. fixed

float: 
1. none
2. left
3. right
4. inherit

display:
1. none
2. inline
3. block
4. list-item
5. inline-block
6. inline-table
7. table
8. table-cell
9. table-column
10. table-column-group
11. table-footer-group
12. table-header-group
13. table-row
14. table-row-group
15. flex
16. inline-flex
17. grid
18. inline-grid
19. run-in
20. inherit

1. 设置了float回强制使用block layout
inline 	block
inline-block 	block
inline-table 	table
table-row 	block
table-row-group 	block
table-column 	block
table-column-group 	block
table-cell 	block
table-caption 	block
table-header-group 	block
table-footer-group 	block
flex 	flex, but float has no effect on such elements
inline-flex 	inline-flex, but float has no effect on such elements

2. absolute + block + float
absolute和float都将元素从正常的文本流中“拉出来”，但是感觉绝对定位更霸道一些，两个属性同时设置的时候float无效。

http://jsfiddle.net/qRACD/

3. relative + block + float
正常浮动

http://jsfiddle.net/nnvUz/

4. absolute + inline + none

5. absolute + 
