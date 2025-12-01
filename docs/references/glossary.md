---
title: Robotics Glossary
description: Comprehensive glossary of robotics, ROS 2, simulation, and AI terminology used throughout the course
keywords: [glossary, robotics terms, ROS 2, Isaac Sim, VLA, definitions]
sidebar_position: 1
---

import GlossarySearch from '@site/src/components/GlossarySearch';

# Robotics Glossary

Quick reference for robotics terminology used throughout the Physical AI & Humanoid Robotics course. Terms are organized alphabetically.

<GlossarySearch />

---

## A

## Action (ROS 2)
Asynchronous communication pattern in ROS 2 for long-running tasks (e.g., navigation to a goal). Actions provide feedback during execution and can be preempted. Consists of goal, result, and feedback messages.

**Related**: [Module 1: ROS 2](../module-1-ros2)

## Actuator
Device that converts energy (electrical, pneumatic, hydraulic) into motion. Examples: electric motors, servo motors, pneumatic cylinders. Actuators enable robots to move and manipulate objects.

## Algolia DocSearch
Search-as-a-service solution for documentation websites. Provides instant search with typo tolerance, faceting, and custom ranking. Used in this textbook for content search.

**Related**: [Introduction](../intro)

---

## B

## Bag File (ROS 2)
Format for recording and playing back ROS 2 message data. Essential for debugging, algorithm development, and sharing datasets. File extension: `.db3` (SQLite format in ROS 2).

**Related**: [Module 1: ROS 2](../module-1-ros2)

## Base Link
Standard coordinate frame attached to a robot's base (typically center of robot at ground level). All other robot frames are defined relative to base_link.

**Related**: [Module 1: ROS 2](../module-1-ros2)

---

## C

## Capstone Project
Culminating project integrating all course modules. Students build an autonomous humanoid system with voice-driven manipulation: Voice → Plan → Navigate → Perceive → Manipulate.

**Related**: [Module 4: VLA & Humanoids](../module-4-vla-humanoids)

## Computation Graph
Network of ROS 2 nodes communicating via topics, services, and actions. Visualized using `rqt_graph`. Enables distributed robotics architectures.

**Related**: [Module 1: ROS 2](../module-1-ros2)

## CUDA (Compute Unified Device Architecture)
NVIDIA parallel computing platform enabling GPU-accelerated computation. Required for Isaac Sim and deep learning inference on robots.

**Related**: [Workstation Setup](../setup/workstation)

---

## D

## DDS (Data Distribution Service)
Middleware standard used by ROS 2 for real-time, reliable communication. Implementations include Fast-DDS, CycloneDDS, RTI Connext. Replaces TCPROS from ROS 1.

**Related**: [Module 1: ROS 2](../module-1-ros2)

## Degrees of Freedom (DOF)
Number of independent parameters defining robot configuration. A humanoid arm typically has 7 DOF (shoulder: 3, elbow: 1, wrist: 3).

**Related**: [Module 4: VLA & Humanoids](../module-4-vla-humanoids)

## Digital Twin
Virtual replica of a physical system used for simulation, testing, and optimization. In robotics, digital twins enable algorithm validation before hardware deployment.

**Related**: [Module 2: Digital Twin](../module-2-digital-twin)

## Docusaurus
Static site generator used to build this textbook. Features include React-based theming, Algolia search, and MDX support.

---

## E

## Embodied AI
AI systems that interact with the physical world through sensors and actuators. Combines perception, reasoning, and action execution. Contrast with purely digital AI (e.g., chatbots).

**Related**: [Module 4: VLA & Humanoids](../module-4-vla-humanoids)

## End Effector
Terminal device attached to robot's kinematic chain (e.g., gripper, suction cup, camera). Performs manipulation tasks.

**Related**: [Module 4: VLA & Humanoids](../module-4-vla-humanoids)

---

## F

## Flexsearch
Fast, memory-efficient full-text search library. Used in this textbook for glossary search. Provides sub-100ms query times.

**Related**: This glossary uses Flexsearch for instant term lookup

## Forward Kinematics (FK)
Computing end-effector pose given joint angles. Used for simulation and motion visualization.

**Related**: [Module 4: VLA & Humanoids](../module-4-vla-humanoids)

---

## G

## Gazebo
Open-source 3D robotics simulator with physics engines (ODE, Bullet, Dart). Integrates natively with ROS 2. Suitable for rapid prototyping.

**Related**: [Module 2: Digital Twin](../module-2-digital-twin)

## GPU (Graphics Processing Unit)
Parallel processor designed for graphics rendering. Repurposed for AI training (CUDA), physics simulation (PhysX), and ray tracing. NVIDIA RTX GPUs required for Isaac Sim.

**Related**: [Module 3: Isaac Sim](../module-3-isaac)

---

## H

## Homogeneous Transformation
4x4 matrix combining rotation (3x3) and translation (3x1) for coordinate frame transformations. Standard in robotics for pose representation.

**Related**: [Module 4: VLA & Humanoids](../module-4-vla-humanoids)

## Humanoid Robot
Robot with human-like morphology (head, torso, two arms, two legs). Examples: Boston Dynamics Atlas, Unitree H1, Tesla Optimus. Typically 30+ degrees of freedom.

**Related**: [Module 4: VLA & Humanoids](../module-4-vla-humanoids)

---

## I

## IMU (Inertial Measurement Unit)
Sensor measuring acceleration and angular velocity. Combines accelerometer, gyroscope, and sometimes magnetometer. Essential for robot balance and orientation estimation.

**Related**: [Module 2: Digital Twin](../module-2-digital-twin)

## Inverse Kinematics (IK)
Computing joint angles needed to achieve desired end-effector pose. More complex than FK; may have multiple solutions or no solution.

**Related**: [Module 4: VLA & Humanoids](../module-4-vla-humanoids)

## Isaac Gym
NVIDIA's reinforcement learning toolkit built on Isaac Sim. Enables massively parallel policy training (10,000+ environments simultaneously) using GPU acceleration.

**Related**: [Module 3: Isaac Sim](../module-3-isaac)

## Isaac Sim
NVIDIA's GPU-accelerated robotics simulator built on Omniverse. Features photorealistic RTX rendering, PhysX 5 physics, native ROS 2 integration.

**Related**: [Module 3: Isaac Sim](../module-3-isaac)

---

## J

## Jacobian Matrix
Matrix relating joint velocities to end-effector velocities. Used for velocity control and singularity analysis. Size: 6×n (6 DOF end-effector, n joints).

**Related**: [Module 4: VLA & Humanoids](../module-4-vla-humanoids)

## Jetson Orin Nano
NVIDIA embedded GPU platform for edge AI. Features 1024 CUDA cores, 8GB RAM, 5-15W power consumption. Ideal for on-robot AI inference.

**Related**: [Edge Kit Setup](../setup/edge-kit)

---

## L

## LiDAR (Light Detection and Ranging)
Sensor using laser pulses to measure distances and create 3D point clouds. Used for mapping, obstacle avoidance, and localization.

**Related**: [Module 2: Digital Twin](../module-2-digital-twin)

## LLM (Large Language Model)
AI model trained on text data for natural language understanding. Examples: GPT-4, Claude, LLaMA. In robotics, used for task planning from voice commands.

**Related**: [Module 4: VLA & Humanoids](../module-4-vla-humanoids)

---

## M

## Manipulation
Process of grasping, moving, and releasing objects. Requires perception (object detection), planning (grasp pose), and control (trajectory execution).

**Related**: [Module 4: VLA & Humanoids](../module-4-vla-humanoids)

## MoveIt 2
Motion planning framework for ROS 2. Includes inverse kinematics solvers, collision checking, and trajectory generation. Widely used for manipulation.

**Related**: [Module 4: VLA & Humanoids](../module-4-vla-humanoids)

---

## N

## Nav2 (Navigation 2)
ROS 2 navigation stack for mobile robots. Provides path planning, obstacle avoidance, and recovery behaviors. Uses costmaps for environment representation.

**Related**: [Module 3: Isaac Sim](../module-3-isaac)

## Node (ROS 2)
Independent process performing computation (perception, planning, control). Nodes communicate via topics/services/actions. Example: camera driver node publishes to `/camera/image_raw`.

**Related**: [Module 1: ROS 2](../module-1-ros2)

---

## O

## Occupancy Grid
2D/3D representation of environment where each cell indicates free, occupied, or unknown space. Used by Nav2 for path planning.

**Related**: [Module 3: Isaac Sim](../module-3-isaac)

## Odometry
Estimation of robot position based on motion sensors (wheel encoders, IMU, visual). Accumulates error over time; corrected by SLAM or GPS.

**Related**: [Module 3: Isaac Sim](../module-3-isaac)

## Omniverse
NVIDIA platform for 3D collaboration and simulation. Isaac Sim is built on Omniverse. Supports USD format and RTX rendering.

**Related**: [Module 3: Isaac Sim](../module-3-isaac)

---

## P

## PhysX
NVIDIA's GPU-accelerated physics engine. Supports rigid bodies, soft bodies, fluids, and cloth. Used in Isaac Sim for realistic simulation.

**Related**: [Module 3: Isaac Sim](../module-3-isaac)

## Point Cloud
Set of 3D points representing object surfaces. Generated by LiDAR, depth cameras, or stereo vision. Format: PCL, Open3D.

**Related**: [Module 3: Isaac Sim](../module-3-isaac)

---

## Q

## QoS (Quality of Service)
Configuration for ROS 2 communication reliability and performance. Profiles include: Best Effort, Reliable, Sensor Data, Services. Tunable parameters: history depth, durability, liveliness.

**Related**: [Module 1: ROS 2](../module-1-ros2)

---

## R

## rclpy
ROS 2 Python client library. Used for writing nodes, publishers, subscribers, services in Python. Alternative: rclcpp (C++).

**Related**: [Module 1: ROS 2](../module-1-ros2)

## Reinforcement Learning (RL)
Machine learning paradigm where agents learn by trial and error through rewards. In robotics, used for grasping, manipulation, and navigation.

**Related**: [Module 3: Isaac Sim](../module-3-isaac)

## RGB-D Camera
Camera providing both color (RGB) and depth (D) information. Examples: Intel RealSense, Microsoft Kinect. Used for 3D perception.

**Related**: [Module 3: Isaac Sim](../module-3-isaac)

## ROS 2 (Robot Operating System 2)
Middleware framework for robot software development. Provides communication (DDS), tools (rviz, rqt), and libraries (tf2, nav2).

**Related**: [Module 1: ROS 2](../module-1-ros2)

## RTX (Ray Tracing Texel eXtreme)
NVIDIA GPU architecture with dedicated ray tracing cores. Enables photorealistic rendering in Isaac Sim for sensor simulation.

**Related**: [Module 3: Isaac Sim](../module-3-isaac)

## RViz2
3D visualization tool for ROS 2. Displays robot models, sensor data, transforms, and planning results. Essential debugging tool.

**Related**: [Module 1: ROS 2](../module-1-ros2)

---

## S

## Service (ROS 2)
Synchronous request-response communication pattern. Client sends request, waits for server response. Used for queries and short-lived tasks.

**Related**: [Module 1: ROS 2](../module-1-ros2)

## SLAM (Simultaneous Localization and Mapping)
Problem of building a map while simultaneously localizing within it. Variants: LiDAR SLAM, Visual SLAM (VSLAM), RGB-D SLAM.

**Related**: [Module 3: Isaac Sim](../module-3-isaac)

---

## T

## TF2 (Transform Library 2)
ROS 2 library for managing coordinate frame relationships. Tracks transforms over time, enabling conversion between frames (e.g., base_link → camera_link).

**Related**: [Module 1: ROS 2](../module-1-ros2)

## Topic (ROS 2)
Named communication channel for asynchronous message passing. Publishers send messages, subscribers receive. Many-to-many pattern. Example: `/camera/image_raw`.

**Related**: [Module 1: ROS 2](../module-1-ros2)

---

## U

## Unity
Game engine used for photorealistic robot simulation. Unity Robotics Hub provides ROS integration. Alternative to Gazebo for synthetic data generation.

**Related**: [Module 2: Digital Twin](../module-2-digital-twin)

## URDF (Unified Robot Description Format)
XML format for describing robot kinematics, dynamics, and visual properties. Parsed by ROS 2 for robot_state_publisher and visualization.

**Related**: [Module 1: ROS 2](../module-1-ros2)

---

## V

## VLA (Vision-Language-Action)
AI model architecture that integrates visual perception, language understanding, and physical action. Enables robots to respond to natural language commands.

**Related**: [Module 4: VLA & Humanoids](../module-4-vla-humanoids)

## VSLAM (Visual SLAM)
SLAM variant using camera images for localization and mapping. Algorithms: ORB-SLAM3, RTAB-Map, OpenVSLAM. Less affected by transparent/reflective surfaces than LiDAR.

**Related**: [Module 3: Isaac Sim](../module-3-isaac)

---

## X

## Xacro (XML Macros)
Extension to URDF enabling parameterization and code reuse via macros. Simplifies complex robot descriptions. File extension: `.xacro`.

**Related**: [Module 1: ROS 2](../module-1-ros2)

---

## Z

## Zero-Shot Generalization
AI model's ability to perform tasks without specific training. VLA models like RT-2 can execute novel manipulation tasks by leveraging web-scale pre-training.

**Related**: [Module 4: VLA & Humanoids](../module-4-vla-humanoids)

---

## Contributing

Found a missing term? Submit a pull request to add robotics terminology to this glossary.

**Search Tips**:
- Use the search box above to find terms quickly
- Terms link to relevant course modules for deeper learning
- Alphabetically organized for easy browsing
