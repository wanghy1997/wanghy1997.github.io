---
title: Medical image segmentation
order: 1
dir:
    text: 3_MIA
---



<p align="center">
  Medical image segmentation under limited annotation<br>
  <b>A curated list of resources on 2D and 3D medical image segmentation.</b>
  <b>Recently, medical image segmentation under limited annotation conditions has received extensive attention. Full supervision is ideal, but due to limitations such as privacy, incomplete annotation is our norm. Therefore, in order to keep up with the research trends and tap into the research potential under limited annotation conditions, we hope to create a benchmark for medical image segmentation under limited annotation. These summaries will include related work under incomplete conditions such as zero-shot, few-shot, weakly supervised learning, semi-supervised learning, and active learning. If there is anything that needs to be supplemented, please feel free to ask me(wendong.6267@gmail.com).</b>
</p>

[//]: # (图片保存路径：/Users/wanghongyi/codes/wanghy1997.github.io/src/.vuepress/public/img2Notebook/MIA)

> 🚧 Status: Actively updated (WIP). </br>
> 🚧 Sections/tags may change. </br>
> 🚧 Contributions welcome via Issues/PRs.

## 📚 Contents

- 🧠 [1. Literature Review]()
  - [1.1 Semi-supervised Learning(SSL)](#11--semi-supervised-learningssl) 

  - [1.2 Weakly-supervised Learning(WSL)](#12--Weakly-supervised-Learningwsl)

  - [1.3 Active Learning(AL)](#13--active-learningal)

  - [1.4 Zero-shot](#14-Zero-shot)

  - [1.5 Few-shot](Few-shot)

    

- 💬 [2. Semi-supervised Learning]() 
  - 一致性学习

    

- 🖼️ [3. Weakly-supervised Learning]() 
  - 基于SAM的弱监督学习

    

- 🦾 [4. Active Learning]() 
  - 基于不确定性的主动学习策略
  - 基于多样性\代表性的主动学习策略



- 🛠️ 5. [Zero-shot]()
  - 基于 SAM 的Zero-shot 医学图像分割

- 🗂️ [Few-shot]()
  - 基于 SAM 的 Few-shot 医学图像分割

## 1. 🧠 Literature Review

## 1.1 💬 Semi-supervised Learning(SSL)

|Date|The First and Last Authors|Dim| Title                                                                                                                                      |Code|Reference|
|---|---|---|--------------------------------------------------------------------------------------------------------------------------------------------|---|---|
|2025-06|Zheng Zhang and Wendong Wang|3D| [A Semantic Knowledge Complementarity based Decoupling Framework  for Semi-supervised Class-imbalanced Medical Image Segmentation](#SKCDF) |[Code](https://github.com/yinguanchun/SKCDF)|[CVPR2025](https://openaccess.thecvf.com/content/CVPR2025/papers/Zhang_A_Semantic_Knowledge_Complementarity_based_Decoupling_Framework_for_Semi-supervised_Class-imbalanced_CVPR_2025_paper.pdf)|
||||                                                                                                                                            |||
|2025-08|J. Zhu and H. Cui|| CCA: Contrastive cluster assignment for supervised and semi-supervised medical image segmentation                                          |[Code](https://github.com/zhujinghua1234/CCA-Seg)|[NN2025](https://www.sciencedirect.com/science/article/pii/S0893608025002941)|
|2025-04|Q. Zhou and Z. Wang|3D| [Single-slice Semi-supervised 3D Medical Image Segmentation via Correlation Information Enhancement and Hybrid Pseudo Mask Generation](#paper2)                                                                                                                                |None|[JBHI2025](https://ieeexplore.ieee.org/abstract/document/10959090)|
|2025-04|K. Yan and Z. Liu|| SGTC: Semantic-Guided Triplet Co-training for Sparsely Annotated Semi-Supervised Medical Image Segmentation                                |None|[AAAI2025](https://ojs.aaai.org/index.php/AAAI/article/view/32986)|
|2025-04|H. Zhang and Y. Ma|| Prototype-Augmented Mean Teacher for Robust Semi-Supervised Medical Image Segmentation                                                     |None|[PR2025](https://www.sciencedirect.com/science/article/pii/S0031320325003826)|
|2025-04|W. Huang and L. Zhang|| GapMatch: Bridging Instance and Model Perturbations for Enhanced Semi-Supervised Medical Image Segmentation                                |None|[AAAI2025](https://ojs.aaai.org/index.php/AAAI/article/view/33919)|
|2025-04|Y. Wang and Y. Shi|| Balancing Multi-Target Semi-Supervised Medical Image Segmentation with Collaborative Generalist and Specialists                            |[Code](https://github.com/wangyou0804/CGS)|[TMI2025](https://ieeexplore.ieee.org/abstract/document/10948494)|
|||| Continuously updated...                                                                                                                    |||



## 1.2 🖼️ Weakly-supervised Learning(WSL)

| Date    | The First and Last Authors | Title                                                        | Code                                              | Reference                                                    |
| ------- | -------------------------- | ------------------------------------------------------------ | ------------------------------------------------- | ------------------------------------------------------------ |
| 2025-08 | J. Zhu and H. Cui          | CCA: Contrastive cluster assignment for supervised and semi-supervised medical image segmentation | [Code](https://github.com/zhujinghua1234/CCA-Seg) | [NN2025](https://www.sciencedirect.com/science/article/pii/S0893608025002941) |
|         |                            | Continuously updated...                                      |                                                   |                                                              |



## 1.3 🦾 Active Learning(AL)

| Date    | The First and Last Authors | Title                                                        | Code                                              | Reference                                                    |
| ------- | -------------------------- | ------------------------------------------------------------ | ------------------------------------------------- | ------------------------------------------------------------ |
| 2025-08 | J. Zhu and H. Cui          | CCA: Contrastive cluster assignment for supervised and semi-supervised medical image segmentation | [Code](https://github.com/zhujinghua1234/CCA-Seg) | [NN2025](https://www.sciencedirect.com/science/article/pii/S0893608025002941) |
|         |                            | Continuously updated...                                      |                                                   |                                                              |

## 1.4 🛠️ Zero-shot

| Date    | The First and Last Authors | Title                                                        | Code                                              | Reference                                                    |
| ------- | -------------------------- | ------------------------------------------------------------ | ------------------------------------------------- | ------------------------------------------------------------ |
| 2025-08 | J. Zhu and H. Cui          | CCA: Contrastive cluster assignment for supervised and semi-supervised medical image segmentation | [Code](https://github.com/zhujinghua1234/CCA-Seg) | [NN2025](https://www.sciencedirect.com/science/article/pii/S0893608025002941) |
|         |                            | Continuously updated...                                      |                                                   |                                                              |





## 1.5 🗂️ Few-shot

| Date    | The First and Last Authors | Title                                                        | Code                                              | Reference                                                    |
| ------- | -------------------------- | ------------------------------------------------------------ | ------------------------------------------------- | ------------------------------------------------------------ |
| 2025-08 | J. Zhu and H. Cui          | CCA: Contrastive cluster assignment for supervised and semi-supervised medical image segmentation | [Code](https://github.com/zhujinghua1234/CCA-Seg) | [NN2025](https://www.sciencedirect.com/science/article/pii/S0893608025002941) |
|         |                            | Continuously updated...                                      |                                                   |                                                              |



## 2. 💬 [Semi-supervised Learning]()

## 2.1 一致性学习
<span id="SKCDF"></span>
- [CVPR2025] A Semantic Knowledge Complementarity based Decoupling Framework  for Semi-supervised Class-imbalanced Medical Image Segmentation [[code]](https://github.com/yinguanchun/SKCDF) [[pdf]](https://openaccess.thecvf.com/content/CVPR2025/papers/Zhang_A_Semantic_Knowledge_Complementarity_based_Decoupling_Framework_for_Semi-supervised_Class-imbalanced_CVPR_2025_paper.pdf)
  - 文章考虑的问题：
    - 当前有标签和无标签数据共同学习的方法，无差别的将无标签数据参与学习会影响模型性能，因为缺乏标注信息。
    - 有标签和无标签数据之间是孤立训练的，没有互相提供语义指导或增强；但医学图像中同类器官往往语义一致，是可以互相补充的。
    - 医学图像中存在严重的类别不平衡，现有方法常用 reweight 或 resample，但这些方法要么计算开销大、要么压制主类，不理想。尤其对小器官表现差。
  - 文章解决的思路：
  - 文章的整体框架：
  ![](/img2Notebook/MIA/image-20250926011556656.png)

<span id="paper2"></span>



## 3. 🖼️ Weakly-supervised Learning



## 4. 🦾 Active Learning



## 5. 🛠️ Zero-shot



## 6. 🗂️ Few-shot

