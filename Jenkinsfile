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
                bat 'npm install'
            }
        }
        stage('test') {
            steps {
                bat 'node test'
            }
        }
    }
}
