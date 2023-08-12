# 프로그래머스 코테 : 함수 돌리면서 결과값 확인하며 코드 작성

'''
- 한 음악을 반복 재생 : 음악의 끝부분과 처음부분이 이어져 있을 수도 있음
- 한 음악을 중간에 끊을 경우 : 원본 음악에 있을지라도 그 곡이 아닐 수도 있음
- 기억한 멜로디를 재생 시간과 제공된 악보를 직접 보면서 비교

- 음악 제목, 재생 시작 -> 끝난 시각, 악보 제공
- 12개 음 : C, C#, D, D#, E, F, F#, G, G#, A, A#, B (음은 1분당 1개)
- 음악은 처음부터 재생 시간만큼 (반복)재생
- 조건 일치 여러개 : 재생시간이 제일 긴 음악제목을 반환, 먼저 입력된
- 조건 일치 X : (None) 반환
'''

# 시간 계산
def time_calculate(start_time, end_time):
    hours = 0
    if start_time[0:2] != end_time[0:2]:
        hours = int(end_time[0:2]) - int(start_time[0:2])
        if hours == 1:
            time = 60 - int(start_time[3:]) + int(end_time[3:])
        else:
            time = 60 * hours + 60 - int(start_time[3:]) + int(end_time[3:])
    else:
        time = int(end_time[3:]) - int(start_time[3:])
    return time
    
def solution(m, musicinfos):
    corrects = []
    song_times = []
    # musicinfos : 음악 시작 시각, 음악 끝난 시각, 음악 제목, 악보 정보
    infos = []
    tmp = ''
    for i in range(len(musicinfos)):
        for j in range(len(musicinfos[i])):
            if musicinfos[i][j] != ',':
                tmp.append(musicinfos[i][j])
            else:
                infos.append(tmp)
                tmp = ''

        # start_time = musicinfos[i][0]
        # end_time = musicinfos[i][1]
        # songname = musicinfos[i][2]
        # melody = musicinfos[i][3]
        
        # 재생된 시간 계산
        time = time_calculate(start_time, end_time)
        
        # 시간동안 재생 된 멜로디 문자열 만들기  #인 경우 while 문 + cnt 로 카운팅
        play_song = ''
        melody_length = len(melody)
        
        cnt = 0
        idx = 0
        while cnt < time:
            # 샵붙은 음은 알파벳+샵까지 append
            if melody[idx + 1 % melody_length] == '#':
                play_song.append(melody[idx % melody_length : (idx + 2) % melody_length])
                idx += 1
            else:
                play_song.append(melody[idx % melody_length])
            idx += 1
            cnt += 1
        
        # 비교
        tmp = time - len(m)
        for i in range(tmp):
            if m == play_song[i:i+7]:
                corrects.append(songname)
                song_times.append(melody)
                break
                

    # 일치한 멜로디가 1개인 경우
    if len(corrects) == 1:
        answer = corrects[0]
    # 일치한 멜로디가 여러 개인 경우
    else:
        ans_idx = index(max(song_times))
        answer = corrects[ans_idx]
    return answer

print(solution("ABCDEFG",["12:00,12:14,HELLO,CDEFGAB", "13:00,13:05,WORLD,ABCDEF"]))