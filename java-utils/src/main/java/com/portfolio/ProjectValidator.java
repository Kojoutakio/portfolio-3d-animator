package com.portfolio;

import java.util.List;
import java.util.ArrayList;

/**
 * Simple Java utility to validate portfolio project data.
 * Compile: javac -d out src/main/java/com/portfolio/ProjectValidator.java
 * Run:     java -cp out com.portfolio.ProjectValidator
 */
public class ProjectValidator {

    public static class Project {
        public int id;
        public String title;
        public String category;
        public int year;
        public List<String> tools;
        public boolean featured;

        public Project(int id, String title, String category, int year,
                       List<String> tools, boolean featured) {
            this.id = id;
            this.title = title;
            this.category = category;
            this.year = year;
            this.tools = tools;
            this.featured = featured;
        }
    }

    public static boolean isValid(Project p) {
        if (p == null) return false;
        if (p.id <= 0) return false;
        if (p.title == null || p.title.isBlank()) return false;
        if (p.category == null || p.category.isBlank()) return false;
        if (p.year < 2000 || p.year > 2100) return false;
        if (p.tools == null || p.tools.isEmpty()) return false;
        return true;
    }

    public static void main(String[] args) {
        List<String> tools = new ArrayList<>();
        tools.add("Blender");
        tools.add("Substance Painter");

        Project sample = new Project(
            1,
            "Industrial Robotic Arm Animation",
            "Mechanical",
            2025,
            tools,
            true
        );

        System.out.println("◆ Portfolio Project Validator (Java)");
        System.out.println("  Title : " + sample.title);
        System.out.println("  Valid : " + (isValid(sample) ? "YES" : "NO"));
    }
}
