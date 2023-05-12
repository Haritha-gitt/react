pipeline {
    agent any
    stages {
        stage('checkout'){
            steps{
                git branch:'main',url:'https://github.com/Haritha-gitt/react.git'
            }
        }
        stage('build') {
            steps {
                sh 'npm install'
            }
        }
        stage('test') {
            steps {
                sh 'node test'
            }
        }
    }
}
