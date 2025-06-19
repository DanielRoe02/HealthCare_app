import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import Header from '@/components/Header';
import { Heart, Shield, Users, Clock } from 'lucide-react-native';

export default function InfoPage() {
  return (
    <View style={styles.container}>
      <Header />
      
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.heroSection}>
          <Text style={styles.heroTitle}>Welcome to MindEase</Text>
          <Text style={styles.heroSubtitle}>
            Your personal companion for mental wellness and emotional support
          </Text>
        </View>

        <View style={styles.descriptionSection}>
          <Text style={styles.description}>
            MindEase is designed to help you track your mood, find moments of peace through meditation, 
            and receive supportive guidance whenever you need it. Our app provides a safe, private space 
            for you to focus on your mental wellbeing.
          </Text>
        </View>

        <View style={styles.featuresSection}>
          <Text style={styles.sectionTitle}>How MindEase Helps You</Text>
          
          <View style={styles.featureItem}>
            <View style={[styles.featureIcon, { backgroundColor: '#FF6B6B' }]}>
              <Heart size={20} color="#FFFFFF" />
            </View>
            <View style={styles.featureContent}>
              <Text style={styles.featureTitle}>Mood Tracking</Text>
              <Text style={styles.featureDescription}>
                Monitor your emotional wellbeing with our simple daily mood tracker. 
                Gain insights into your patterns and progress over time.
              </Text>
            </View>
          </View>

          <View style={styles.featureItem}>
            <View style={[styles.featureIcon, { backgroundColor: '#7ED321' }]}>
              <Clock size={20} color="#FFFFFF" />
            </View>
            <View style={styles.featureContent}>
              <Text style={styles.featureTitle}>Guided Meditation</Text>
              <Text style={styles.featureDescription}>
                Access guided meditation sessions designed to help you relax, 
                reduce stress, and find inner peace in your daily life.
              </Text>
            </View>
          </View>

          <View style={styles.featureItem}>
            <View style={[styles.featureIcon, { backgroundColor: '#4A90E2' }]}>
              <Users size={20} color="#FFFFFF" />
            </View>
            <View style={styles.featureContent}>
              <Text style={styles.featureTitle}>AI Support Chat</Text>
              <Text style={styles.featureDescription}>
                Chat with our supportive AI assistant whenever you need someone to talk to. 
                Get helpful guidance and coping strategies.
              </Text>
            </View>
          </View>

          <View style={styles.featureItem}>
            <View style={[styles.featureIcon, { backgroundColor: '#AF52DE' }]}>
              <Shield size={20} color="#FFFFFF" />
            </View>
            <View style={styles.featureContent}>
              <Text style={styles.featureTitle}>Private & Secure</Text>
              <Text style={styles.featureDescription}>
                Your privacy is our priority. All your data is kept secure and private, 
                giving you a safe space to focus on your mental health.
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.supportSection}>
          <Text style={styles.sectionTitle}>Need Additional Support?</Text>
          <Text style={styles.supportText}>
            While MindEase is a helpful tool for daily mental wellness, it's not a replacement for 
            professional mental health care. If you're experiencing a mental health crisis or need 
            immediate support, please reach out to a mental health professional or call your local 
            emergency services.
          </Text>
          
          <View style={styles.emergencyInfo}>
            <Text style={styles.emergencyTitle}>Crisis Resources:</Text>
            <Text style={styles.emergencyText}>
              • National Suicide Prevention Lifeline: 988{'\n'}
              • Crisis Text Line: Text HOME to 741741{'\n'}
              • International Association for Suicide Prevention: iasp.info
            </Text>
          </View>
        </View>

        <View style={styles.aboutSection}>
          <Text style={styles.sectionTitle}>About Mental Health</Text>
          <Text style={styles.aboutText}>
            Mental health is just as important as physical health. It affects how we think, feel, 
            and act. Taking care of your mental health is a sign of strength, not weakness. 
            Remember that it's okay to ask for help, and small daily practices can make a 
            significant difference in your overall wellbeing.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
  },
  heroSection: {
    paddingVertical: 32,
    alignItems: 'center',
  },
  heroTitle: {
    fontSize: 28,
    fontFamily: 'Inter-Bold',
    color: '#333333',
    textAlign: 'center',
    marginBottom: 12,
  },
  heroSubtitle: {
    fontSize: 18,
    fontFamily: 'Inter-Regular',
    color: '#666666',
    textAlign: 'center',
    lineHeight: 26,
  },
  descriptionSection: {
    marginBottom: 32,
  },
  description: {
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    color: '#333333',
    lineHeight: 24,
    textAlign: 'center',
  },
  featuresSection: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 22,
    fontFamily: 'Inter-Bold',
    color: '#333333',
    marginBottom: 20,
  },
  featureItem: {
    flexDirection: 'row',
    marginBottom: 24,
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 12,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
  },
  featureIcon: {
    width: 40,
    height: 40,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  featureContent: {
    flex: 1,
  },
  featureTitle: {
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
    color: '#333333',
    marginBottom: 4,
  },
  featureDescription: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#666666',
    lineHeight: 20,
  },
  supportSection: {
    marginBottom: 32,
    backgroundColor: '#FFF9E6',
    padding: 20,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#FFE066',
  },
  supportText: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#333333',
    lineHeight: 20,
    marginBottom: 16,
  },
  emergencyInfo: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 8,
  },
  emergencyTitle: {
    fontSize: 14,
    fontFamily: 'Inter-SemiBold',
    color: '#333333',
    marginBottom: 8,
  },
  emergencyText: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#333333',
    lineHeight: 20,
  },
  aboutSection: {
    marginBottom: 32,
  },
  aboutText: {
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    color: '#333333',
    lineHeight: 24,
  },
});