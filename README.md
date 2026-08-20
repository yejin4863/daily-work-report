# 나의 일일 업무보고

스마트폰에서 직원의 일일 업무보고와 주요 프로젝트를 관리하는 웹앱입니다.

## 주요 기능

- 직원 이메일 회원가입 및 로그인
- 오늘 한 일, 진행 업무, 문제점, 조치 내용, 내일 할 일 기록
- 보고서 임시저장, 수정, 제출
- 사진·PDF·문서·엑셀 파일 첨부
- 주요 프로젝트 진행률 및 추진 사항 관리
- 관리자 승인 및 보완 요청
- 보고서 PDF 저장
- Supabase Auth, Database, Storage 연동
- 모바일 반응형 화면

## 배포

- 운영 주소: https://daily-work-report.llyj6900.chatgpt.site
- Supabase의 Authentication > URL Configuration에서 Site URL을 운영 주소로 설정해야 이메일 인증 후 정상적으로 돌아옵니다.

## 환경 변수

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=sb_publishable_your_key
```
