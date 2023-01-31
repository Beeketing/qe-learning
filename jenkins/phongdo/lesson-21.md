## Lesson 21: What is Jenkinsfile | How to create jenkinsfile
- Pipeline: giống kiểu đường ống, hết bước này thì đến bước kia
- Jenkins pipeline: Là chia build job ra thành các stage khác nhau.
- Tạo pipeline
    - Tạo job
    - Bình thường chọn freestyle project, bây giờ chọn pipeline
- Thử tạo 1 pipeline script
```
pipeline {
    agent any

    stages {
        stage('Preparing') {
            steps {
                echo 'Preparing'
            }
        }
        
        stage('Building') {
            steps {
                echo 'Building'
            }
        }
        
        stage('Testing') {
            steps {
                echo 'Testing'
            }
        }
        
        stage('Deploying') {
            steps {
                echo 'Deploying'
            }
        }
    }
}
```