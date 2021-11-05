---
title: Classpath in java
date: 2021-11-01
image: /assets/images/2021/classpath1.jpg
---

## When you’re building and running a Java project there are several classpaths involved

![Java building app flow](/assets/images/2021/java_classpath_diagram.png)

Classpath is a parameter to specify location of dependencies.

## Compile classpath is for providing list of dependencies during compile

Compile classpath is a list of dependencies that are required for the JDK to be able to compile Java code into .class files. In other words, this is the classpath passed to "javac".

## Runtime classpath is required to actually run the compiled Java code

Runtime classpath is list of dependencies that are required to actually run the compiled Java code. That's the classpath passed to "java" executable. In the case of web apps this is your /lib folder, plus any other jars provided by the application server/servlet container.

Example:

-   Use **-classpath** or **-cp** option while running the java application:

```command
> java -cp .;/home/user/jars some-application.jar
```

-   Use **set CLASSPATH** command initially, and then run java application which will search classes/resources in mentioned paths.

```bash
> set CLASSPATH .;c:/jars
```

## Test classpath is used when you run tests

Test classpath is like runtime classpath, but is used when you run tests.

## Gradle

When we’re configuring Gradle dependencies all we’re really doing is configuring which dependencies should appear on which classpath. Given there are only two classpaths, it makes sense that we have three options to declare our dependencies.

-   compileOnly – put the dependency on the compile classpath only
-   runtimeOnly – put the dependency on the runtime classpath only
-   implementation – put the dependency on both classpaths

![Java building app flow](/assets/images/2021/gradle-dep-conf.png)

### gradle.build

```groovy
dependencies {
    compileOnly "org.jetbrains.kotlin:kotlin-stdlib:$kotlin_version"
    runtimeOnly "dev.inmo:tgbotapi:$tgbotapi_version"
    implementation "org.jetbrains.kotlin:kotlin-stdlib:$kotlin_version"
}
```

## Maven

Dependency scope is used to limit the transitivity of a dependency and to determine when a dependency is included in a classpath.

There are 6 scopes, but we are interesten only in few of them:

-   compile -
    this is the default scope, used if none is specified. Compile dependencies are available in all classpaths of a project. Furthermore, those dependencies are propagated to dependent projects.
-   provided -
    this is much like compile, but indicates you expect the JDK or a container to provide the dependency at runtime. For example, when building a web application for the Java Enterprise Edition, you would set the dependency on the Servlet API and related Java EE APIs to scope provided because the web container provides those classes. A dependency with this scope is added to the classpath used for compilation and test, but not the runtime classpath. It is not transitive.
-   runtime -
    this scope indicates that the dependency is not required for compilation, but is for execution. Maven includes a dependency with this scope in the runtime and test classpaths, but not the compile classpath.
-   system -
    this scope is similar to provided except that you have to provide the JAR which contains it explicitly. The artifact is always available and is not looked up in a repository.

![Java building app flow](/assets/images/2021/maven-dep-conf.png)

### maven.pom

```maven
        <dependency>
            <groupId>org.apache.httpcomponents</groupId>
            <artifactId>httpclient</artifactId>
            <scope>compile</scope>
        </dependency>

        <dependency>
            <groupId>org.apache.httpcomponents</groupId>
            <artifactId>httpclient</artifactId>
            <scope>provided</scope>
        </dependency>
```

## References

Great article
[Gradle implementation vs. compile dependencies](https://tomgregory.com/gradle-implementation-vs-compile-dependencies/).

How to do it in Java [Java – Set classpath from command line](https://howtodoinjava.com/java-examples/set-classpath-command-line/)

[Maven dependency mechanism](https://maven.apache.org/guides/introduction/introduction-to-dependency-mechanism.html)
