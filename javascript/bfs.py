from collections import deque

def solution(maps):
    x,y = 0,0
    queue = deque()
    queue.append((x,y))
    
    dx = [-1,1,0,0]
    dy = [0,0,-1,1]
    
    ans = -1
    cnt = 1
    while queue:
        x,y = queue.popleft()
        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]
            
            if nx < 0 or nx >= len(maps) or ny < 0 or ny >= len(maps[0]) or maps[x][y] == 0:
                continue
                
            elif maps[nx][ny] == 1:
                maps[nx][ny] = maps[x][y] + 1
                queue.append((nx,ny))
                
                
    if maps[len(maps)-1][len(maps[0])-1] > 1:
        ans = maps[len(maps)-1][len(maps[0])-1]
    return ans
 